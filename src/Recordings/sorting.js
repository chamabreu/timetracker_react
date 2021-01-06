let array = [5, 7, 2, 6, 8, 1, 2, 6, 9, 190]
let arraObjets = [
  {id: 5, name: "five"},
  {id: 7, name: "seven"},
  {id: 1, name: "one"},
  {id: 10, name: "ten"},
  {id: 3, name: "three"},
]
console.log(arraObjets.sort((a, b) => { return b.id - a.id }))