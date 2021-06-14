const fetch = require('node-fetch');
const fs = require('fs');

const url ='https://api.github.com/repos/pgege/pascal-network/tarball/87ee696'
const authHeader ="token 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" 

const options = {
    headers: {
        Authorization: authHeader
    }
};

fetch(url, options)
    .then( res => res.buffer() )
    .then( data => {

        fs.createWriteStream("test.tar.gz").write(data)
    });