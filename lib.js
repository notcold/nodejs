
module.exports = (params) => {

    const n = (Math.random() * 3).toFixed(0)
    console.log('n', n)
    if(params === n - 1 || n === 1&& params ===3 ){
        console.log('你输了!')
        return -1
    }else if(params === n){
        console.log('平局');
        return 0
    }else{
        console.log('你赢了')
        return 1
    }
}
