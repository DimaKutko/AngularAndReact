// const chalk = require('chalk');

// for (let index = 1; index < 10; index++) {
//     if (index % 2 === 0) {
//         console.log(chalk.green(index));
//     } else {
//         console.log(chalk.red(index));
//     }
// }

// const ProgressBar = require("progress");

// const bar = new ProgressBar(":bar", { total: 10 });

// const timer = setInterval(() => {
//     bar.tick();
//     if (bar.complete) {
//         console.log("\nПотрачено");
//         clearInterval(timer);
//     }
// }, 100);

// const moment = require("moment");
// console.log(
//     `
//         ${moment().format()}
//         ${moment().format("DD.MM.YYYY H:m")}
//     `
// );
// moment.locale("ru");
// console.log(moment().format("dddd, Do MMMM Y"));

// const text = require('./data');

// console.log(text);

const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'node_test'), (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Success create folder');
// });

const filePath = path.join(__dirname, 'node_test', 'test.txt');
// fs.writeFile(filePath, 'Hello from NodeJS', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Success create file');
// });

fs.appendFile(filePath, '\nHello from NodeJS', (err) => {
    if (err) {
        throw err;
    }
    console.log('Success create file');
});

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename).name);
// console.log(path.parse(__filename).root);