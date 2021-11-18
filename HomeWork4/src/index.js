import './styles/styles.css';

import csv from './assets/table.csv';
import * as $ from 'jquery';

console.log('Hello from Node.JS');

console.log(csv);

function createTable() {
    var content = "<table class=\"table\"> <tbody>";

    csv.forEach(function(row) {
        content += "<tr>";

        row.forEach(function(cell) {
            content += "<td>" + cell + "</td>";
        });

        content += "</tr>";
    });

    content += " </tbody> </table>";

    $("div.table").html(content);
}

createTable();