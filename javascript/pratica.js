let frutas = ["Maçã", "Uva", "Banana", "Laranja"]

frutas[1]
frutas[0] = "Morango"

frutas.push("Manga")
frutas.pop()
frutas.length
frutas.splice(1,1)

let index_remove = frutas.indexOf("Banana")
frutas.splice(index_remove, 1)

for (let fruta of frutas) {
    console.log(fruta)
    
}

for (let i = 0; i < frutas.length; i++) {
    console.log(i)
    console.log(frutas[i])
}