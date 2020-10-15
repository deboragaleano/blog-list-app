const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
// const Blog = require('../models/blog'); 

const api = supertest(app)

test('blogs are returned as JSON', async () => {
    await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

// test('there are two blogs', async() => {
//     const response = await api.get('/api/blogs')

//     expect(response.body).toHaveLength(2)
// })

afterAll(() => {
    mongoose.connection.close()
})

//TODO 
// - Add initial database with blogs 
// - Refactor api.get('') etc.. 
// - Check the correct length 