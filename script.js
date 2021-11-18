/*
let menu = []
let random = [0, "hola", true, {nombre: "Lennys Burger", tamaño: "S", precio: "$100"}, 10]
/*
for(let i = 0; i < random.length;i++) {
    console.log(random[i])
}
let var1 = "Lennys Burger"
console.log(var1.length)
for(elemento in random) {
    console.log(elemento)
    console.log(random[elemento])
}
//console.log(random.toString())
//console.log(random.join("---"))
menu.push({nombre: "Lennys Burger", tamaño: "S", precio: "100"})
menu.push({nombre: "Lennys Burger", tamaño: "M", precio: "200"})
//console.log(menu)
let nombreEliminado = menu.pop()
//console.log(menu)
//console.log(nombreEliminado)
let arrayConcat = menu.concat(random)
console.log(arrayConcat)
//arrayConcat = arrayConcat.slice(1,3)
//console.log(arrayConcat)
arrayConcat.splice(3,2)
console.log(arrayConcat)
*/

let menu = [
    {
        nombre: "Lennys Burger",
        tamaño: "S",
        precio: 100,
    },
    {
        nombre: "Lennys Burger",
        tamaño: "M",
        precio: 200,
    },
    {
        nombre: "Lennys Burger",
        tamaño: "L"
        precio: 300,
    },
    {
        nombre: "Lennys Burger",
        tamaño: "XL",
        precio: 400,
    },
]
/*
for(hamburguesa of hamburguesas) {
    console.log(hamburguesa)
    for(atributo in hamburguesa) {
        console.log(hamburguesa[atributo])
    }
}
console.log(typeof hamburguesas)
*/

console.log(hamburguesas.find(hamburguesas => hamburguesas.precio == 100))
console.log(hamburguesas.filter (hamburguesas => hamburguesas.precio == < 400 && hamburguesas.tamaño >S))
console.log(hamburguesas.map(hamburguesas => hamburguesas.precio >100))