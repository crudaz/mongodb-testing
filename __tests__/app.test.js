const app = require('../app')
const request = require('supertest')
var mongoose = require('mongoose')
var mongoDB = 'mongodb://localhost:27017/test'
mongoose.connect(mongoDB)

describe('App test', () => {
    it('has a module', () => {
        expect(app).toBeDefined()
    })

    let server

    beforeAll(() => {
        server = app.listen(3001)
    })

    afterAll(done => {
        mongoose.connection.close()
        server.close(done)
    })

    describe('user routes test', () => {
        it('Should be list users', async () => {
            await request(server).get("/users").expect(200)
        })

        it('Should be post users', async () => {
            await request(server).post("/users?id=10&name=user10&email=user10@gmail.com").expect(200)
        })

        it('fails if name is missing in post users', async () => {
            await request(server).post("/users?name=temp").expect(500)
        })

        it('fails if email is missing in post users', async () => {
            await request(server).post("/users?email=temp").expect(500)
        })

        it('fails if name and email is missing in post users', async () => {
            await request(server).post("/users").expect(500)
        })
    })

    describe('404', () => {
        it('returns 404', async () => {
            await request(server).post("/fail").expect(404)
        })
    })
})