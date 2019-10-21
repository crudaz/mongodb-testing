
const get = (url) => {
    return Promise.resolve({ data: { "id": "1", "name": "user1", "email": "user1@gmail.com" } }) 
}

exports.get = get