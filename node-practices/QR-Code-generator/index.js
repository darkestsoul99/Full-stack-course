import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
    .prompt([
  {
    message: "Type in your URL: ",
    name: "URL",
  },
])
    .then((answers) => {
        const url = answers.URL
        console.log(url);
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
        const data = new Uint8Array(Buffer.from(url));
        fs.writeFile('url.txt', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Propmt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } else {
            // Something else went wrong
            console.log(error);
        }
    });