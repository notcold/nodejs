// let a = 1
// const  b = a
// async function req(params) {
//    await Promise.then((result) => {
//         console.log('promise')
//     }).catch((err) => {
//         console.log('catch')
//     });
// }

// const p = req()

const game = require('./lib')

let count = 0 
process.stdin.on('data',buffer=>{
    const val = buffer.toString().trim()
    count += game(val)
    console.log('v', val)
    if(count >= 3){
        process.exit()
    }
})