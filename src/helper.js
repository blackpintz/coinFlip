const pick = (arr) => {
const newCoin = arr[Math.floor(Math.random() * arr.length)]
return newCoin
}


export {pick}