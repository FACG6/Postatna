const fs = require('fs');
const path = require('path');

const handelServePages = (req, res) => {
    const endpoint = req.url;
    const conteType = {
        html: 'text/html',
        css: 'text/css',
        js: 'text/javascript',
        png: 'image/png',
        jpg: 'image/jpg',
        ico: 'image/x-icon',
        json: 'application/json'
    }
    const extention = path.extname(endpoint).split('.')[1];
    const filesPath = path.join(__dirname, '..','..', ...endpoint.split('/'));

    fs.readFile(filesPath, (err, file) => {
        if (err) {
            // handleServerError(req, res);
            console.log('err')
        }
        res.writeHead(200, {
            'content-type': conteType[extention]
        })
        res.end(file);
    })

//         const readFile1 = (file) => {
//         return new Promise( (resolve, reject) => {
//                 fs.readFile(file, callback)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//         } )
//     }
// const callback = (err, file) => {
//     if(err) reject(err);
//     else resolve(file);
// }

// readFile1(filesPath)
//res.writeHead(200, {'content-type': conteType[extention]})
// .then( (res) => console.log(res))
// .catch(console.log('error'))  
}

// module.exports =  {
//     handelServePages,
//     handelHome
// } ;

module.exports = 
     handelServePages;