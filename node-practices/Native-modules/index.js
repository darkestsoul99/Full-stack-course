const fs = require("fs");
const data = new Uint8Array(Buffer.from('Hello Node.js'));

// if (!created) {
//     fs.writeFile('message.txt', data, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
//     created = True;
// }

fs.readFile('message.txt', "utf8",(err, data) => {
    if (err) throw err;
    console.log(`The content of the file is \n${data}`);
})