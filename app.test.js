const request = require('supertest');
const app = require('./app');

describe('App', () => {
    test('should return 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
    test('should return a simple string line!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe("Hey guys, i'm working!");
    });
})
