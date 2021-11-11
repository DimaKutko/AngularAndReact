const https = require('https');
const path = require('path');
const fs = require('fs');
const writeJson = require('write-json');
const got = require('got');

const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

got.get(url, { responseType: 'json' })
    .then(res => writeFile(res.body))
    .catch(err => {
        console.log('Error: ', err.message);
    });

function writeFile(value) {
    var dir = path.join(__dirname, 'currencies');
    if (!fs.existsSync(dir)) {
        fs.mkdir(dir, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Success create folder');
        });
    }

    const filePath = path.join(dir, 'currencies_info.json');
    writeJson.sync(filePath, value);
}