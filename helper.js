const fs = require('fs')

function loadFlow(fileUrl) {
    return new Promise((res, rej) => {
        fs.readFile(fileUrl, (err, dataBuffer) => {
            if(err) {
                rej(err)
            }
    
            const dataJSON = dataBuffer.toString()
            res(JSON.parse(dataJSON))
        })
    });
}

module.exports = {
    loadFlow
}