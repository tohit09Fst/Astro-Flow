import request from 'supertest';
import app from './index.js';
import userModel from '../models/userModel.js';
import astroModel from '../models/astroModel.js';
import { assignUserToAstro, toggleTopAstro } from '../controllers/astroController.js';

// Define a test suite for the user routes
describe('User Routes', () => {
    // Define a test for the POST /user/createuser route
    describe('POST /user/createuser', () => {
        it('should create a new user', async () => {
            const userData = {
                name: 'Test User',
                gender: 'male',
                dob: '1990-01-01',
                phone: '1234567890',
                email: 'test@example.com',
                password: 'password'
            };

            const res = await request(app)
                .post('/user/createuser')
                .send(userData);

            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe('ok');
            expect(res.body.message.name).toBe(userData.name);
            expect(res.body.message.email).toBe(userData.email);
        });
    });
});

// Define a test suite for the astrologer controller functions
describe('Astrologer Controller', () => {
    // Define a test for the assignUserToAstro function
    describe('assignUserToAstro', () => {
        it('should assign a user to an astrologer', async () => {
            const newUser = await userModel.create({
                name: 'Test User',
                gender: 'male',
                dob: '1990-01-01',
                phone: '1234567890',
                email: 'test@example.com',
                password: 'password'
            });

            const result = await assignUserToAstro();

            expect(result.astrologerId).toBeDefined();

            await userModel.findByIdAndDelete(newUser._id);
        });
    });

    // Define a test for the toggleTopAstro function
    describe('toggleTopAstro', () => {
        it('should toggle the top status of an astrologer', async () => {
            const newAstro = await astroModel.create({
                name: 'Test Astrologer',
                top: false
            });

            const result = await toggleTopAstro(newAstro._id);

            expect(result.message.top).toBe(true);

            await astroModel.findByIdAndDelete(newAstro._id);
        });
    });
});
