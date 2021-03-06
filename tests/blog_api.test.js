const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app) 
const Blog = require('../models/blog')

const initialBlogs = [
    { _id: "5a422a851b54a676234d17f7", 
        title: "React patterns", 
        author: "Michael Chan", 
        url: "https://reactpatterns.com/", 
        likes: 7, 
        __v: 0 }, 
    { _id: "5a422aa71b54a676234d17f8", 
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra", 
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", 
        likes: 5, 
        __v: 0 }, 
    { _id: "5a422b3a1b54a676234d17f9", 
        title: "Canonical string reduction", 
        author: "Edsger W. Dijkstra", 
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", 
        likes: 12, 
        __v: 0 }, 
    { _id: "5a422b891b54a676234d17fa", 
        title: "First class tests", 
        author: "Robert C. Martin", 
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", 
        likes: 10, 
        __v: 0 }, 
    { _id: "5a422ba71b54a676234d17fb", 
        title: "TDD harms architecture", 
        author: "Robert C. Martin", 
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", 
        likes: 0, 
        __v: 0 }, 
    { _id: "5a422bc61b54a676234d17fc", 
        title: "Type wars", 
        author: "Robert C. Martin", 
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", 
        likes: 2, 
        __v: 0 }
]

//The database is cleared out at the beginning
//and after that we save each blog stored in the initialBlogs array to the database. 
//Doing this, we ensure that the database is in the same state before every test is run.
beforeEach(async () => {
    await Blog.deleteMany({})
    for(let blog of initialBlogs) {
        let blogObject = new Blog(blog); 
        await blogObject.save()
    }
})

test('blogs are returned as JSON', async () => {
    await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are 6 blogs', async() => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(6)
})

/* CHECK: is this the right way? */
test('blog posts have unique ID', async() => {
    const response = await api.get('/api/blogs')

    //Used to create an array containing the ID of every blog returned by the API
    const checkId = response.body.map(b => b.id); 

    expect(checkId).toBeDefined()
})


test('blog is succesfully created', async() => {
    
    // verifies that making an HTTP POST request to the /api/blogs url successfully creates a new blog post
    const newBlog = {
        title: 'something',
        author: 'me'
    }
    
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        // You can verify that the content of the blog post is saved correctly to the database.
        .expect('Content-Type', /application\/json/)

    
    // verify that the total number of blogs in the system is increased by one.
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(initialBlogs.length + 1)
})

//Write a test that verifies that if the likes property is missing from the request, 
//it will default to the value 0. 
test('if blog likes property is empty, default to 0', async() => {
    const newBlog = {
        title: 'blog without likes expect 0',
        author: 'me again'
    }

    await api
    .post('/api/blogs')
    .send(newBlog)
    .then(res => {
        expect(res.body.likes).toBe(0)
    })
})


// Write a test related to creating new blogs via the /api/blogs endpoint, 
// that verifies that if the title and url properties are missing from the request data, 
// the backend responds to the request with the status code 400 Bad Request.
// Make the required changes to the code so that it passes the test.
test('if blog title and url properties are missing, expect 400 status code', async() => {
    const newBlog = {
        author: 'me again'
    }

    await api
    .post('/api/blogs')
    .send(newBlog)
    //* CHECK IF THIS IS OK! */
    .then(res => {
        expect(res.status).toBe(400);
    })
})

afterAll(() => {
    mongoose.connection.close()
})
