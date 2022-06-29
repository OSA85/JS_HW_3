// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

const fs = require('fs')
let rawdata = fs.readFileSync('./task2.json'); 
let users = JSON.parse(rawdata); 



function getUniqueUsers1 (arr) {
    let list =[];
    arr.map((user) => { if (list.indexOf(JSON.stringify(user))==-1) { list.push(JSON.stringify(user)); } })
    let uniqueUsers1 = list.map((element) => JSON.parse(element));
    console.log(uniqueUsers1)
}
getUniqueUsers1(users);