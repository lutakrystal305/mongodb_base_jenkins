/* eslint-disable no-promise-executor-return */
/* eslint-disable no-undef */
// const { describe, it, expect } = require('jest/globals');
const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe('test base router', () => {
  it('should test true', async () => {
    const res = await request.get('/music');
    expect(res.statusCode).toEqual(200);
    // expect(res).toHaveProperty('data');
  });
});
