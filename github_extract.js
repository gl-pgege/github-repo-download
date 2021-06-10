const fetch = require('node-fetch');
const fs = require('fs');

const url ='https://api.github.com/repos/pgege/pascal-network/tarball/87ee696'
const authHeader ="token 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" 

const options = {
    headers: {
        Authorization: authHeader
    }
};

function blobToFile(theBlob, fileName){
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}

fetch(url, options)
    .then( res => res.buffer() )
    .then( data => {

        fs.createWriteStream("test.tar.gz").write(data)
    });