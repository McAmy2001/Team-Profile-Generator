const fs = require('fs');

const writeToFile = (fileName, pageHTML) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, pageHTML, err => {
      if (err) {
        reject(err);
        return;
      }
      else {
        console.log('Page generated.');
      };
      });
    });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }

        resolve ({
          ok: true,
        message: 'Style sheet copied successfully!'
      });
     });
  });
};

module.exports = { writeToFile, copyFile };