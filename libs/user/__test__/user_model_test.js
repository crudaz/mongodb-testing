var mongoose = require('mongoose')
var mongoDB = 'mongodb://127.0.0.1:27017/test'
mongoose.connect(mongoDB)
const User = require('../user_model')

describe('User model test', () => {
    beforeAll(async () => {
        await User.remove({})
    })

    afterEach(async () => {
        await User.remove({})
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })

    it('has a module', () => {
        expect(User).toBeDefined()
    })

    describe('get user', () => {
        it('Should be return list of users', async () => {
            const user = new User({ "id": "10", "name": "user10", "email": "user10@gmail.com" })
            await user.save()

            const foundUser = await User.findOne({name: "user10"})
            const expected = "user10"
            const actual = foundUser.name
            expect(actual).toEqual(expected)
        })
    })

    describe('save user', () => {
        it('Should be save a user', async () => {
            const user = new User({ "id": "10", "name": "user10", "email": "user10@gmail.com" })
            const savedUser = await user.save()
            const expected = "user10"
            const actual = savedUser.name
            expect(actual).toBeEqual(expected)        
        })
    })

    describe('update user', () => {
        it('Should be update a user', async () => {
            const user = new User({ "id": "10", "name": "user10", "email": "user10@gmail.com" })
            await user.save()

            user.name = "usuarioModified"
            const actual = updateUser.name
            expect(actual).toBeEqual(expected)        
        })
    })


})
