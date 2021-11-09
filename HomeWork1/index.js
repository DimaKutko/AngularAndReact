const chalk = require('chalk');
const path = require('path');
const os = require('os');
const fs = require('fs');
const { writeHeapSnapshot } = require('v8');

function osWrite(value) {

    var dir = path.join(__dirname, 'os');
    if (!fs.existsSync(dir)) {
        fs.mkdir(dir, (err) => {
            if (err) {
                throw err;
            }
            console.log('Success create folder');
        });
    }

    const filePath = path.join(dir, 'os_info.txt');
    fs.writeFile(filePath, value, (err) => {
        if (err) {
            throw err;
        }
        console.log('Success create file');
    });
}

var info = 'Your OS:\n';
info += `System: ${os.type()} ${os.release()} ${os.arch()}\n`;
info += `Processor: ${os.cpus()[0].model}\n`;
info += `RAM: ${(os.totalmem() / 1073741824)} GB\n`;
info += `Host name: ${os.hostname()}\n`;

console.log(chalk.green(info));
osWrite(info);