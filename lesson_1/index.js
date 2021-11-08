const chalk = require('chalk');

for (let index = 1; index < 10; index++) {
    if (index % 2 === 0) {
        console.log(chalk.green(index));
    } else {
        console.log(chalk.red(index));
    }
}