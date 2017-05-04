// объекты ассоциативные массивы
var a = {};

a['name'] = 'Alex';
a.age = 33;
var m = 'money';
a[m] = 33333;
a[5] = 'Hello';

// console.log(a['name']);
// console.log( a.name );
var p = 'name';

//console.log( a );

var b = {
    "name" : "Vaz 2101",
    "year" : 1980,
    "cost" : 1000,
    "color" : 'yellow'
};
b.cost = 2555;
// удаление
delete b.cost;
b.newCost = 3000;

// добавим массив
b.mas = [3,4,5,6,8];
b.assoc = { "weight" : 1300, "max-speed" : 150 };

console.log(b['mas'][2]);
console.log(b.mas[2]);
console.log(b);