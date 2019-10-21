
const createUser = User => (id, name, email) => {
    if(!id || !name || !email)
        throw new Error(`Id: ${id}`, `Name: ${name}`, `Email: ${email}`)

    const user = new User({ id, name, email })
    return user.save()
}

const listUsers = User => () => {
    return User.find({})
}

module.exports = User => {
    return {
        createUser: createUser(User),
        listUsers: listUsers(User)
    }
}
