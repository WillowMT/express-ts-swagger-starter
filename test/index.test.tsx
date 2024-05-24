import request from 'supertest';
import express from 'express';
import router from '../src/routes';

const app = express();
app.use(router);

describe('GET /ping', () => {
    it('responds with 200', done => {
        request(app)
            .get('/ping')
            .expect(200, done);
    });
});