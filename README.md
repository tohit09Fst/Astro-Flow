# Astro-Flow

# Flow Distribution Algorithm Project

This project implements a flow distribution algorithm in Node.js for connecting users with astrologers. The goal is to ensure fair and balanced allocation of users to astrologers while providing flexibility to adjust the flow for top astrologers.


## Overview

The project aims to design and implement a flow distribution algorithm in Node.js to connect users with astrologers. It includes mechanisms to allocate users fairly among astrologers and toggle flow for top astrologers.

## Requirements

1. Design a flow distribution algorithm for fair allocation of users.
2. Implement mechanisms to adjust flow for top astrologers.
3. Handle a daily flow of 2000-3000 users and a pool of 500 astrologers efficiently.
4. Provide clear documentation and write test cases.

## Implementation

### Data Structures

- Astrologer model (`astroModel.js`)
- User model (`userModel.js`)

### Algorithm Design

- `assignUserToAstro` function in `astroController.js` for user allocation.
- `toggleTopAstro` function for adjusting flow for top astrologers.

### API Design

- RESTful endpoints in `astroRoutes.js` and `userRoutes.js` to control flow distribution.

### Backend Implementation

- Backend logic in `astroController.js` and `userController.js`.
- MongoDB database integration (`mongoose`).
- Express.js framework for routing.

### Documentation

- Comprehensive documentation explaining algorithm design, API endpoints, and usage (`README.md`).
- API documentation detailing endpoint functionalities.

### Testing

- Unit tests in `test.js` to validate algorithm functionality.
- Test cases for creating users, assigning users to astrologers, and toggling top astrologers.

## Deliverables

- Backend code implementing the flow distribution algorithm.
- API documentation.
- Test cases.
- Project documentation (`README.md`).

## Additional Considerations

- Scalability: Ensure scalability for growing user and astrologer numbers.
- Performance: Optimize algorithm and backend for performance.
- Security: Implement appropriate security measures.
