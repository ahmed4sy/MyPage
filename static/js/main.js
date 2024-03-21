const span = document.querySelector('span')
const tap = document.querySelector('a')
let text = 'Hi iam ahmed 👋.. this is my page'
let tmp = 'H'; let i = 0

let interv = setInterval(function(){
    if (i != 0) {
        tmp += text[i]
    }
    span.innerHTML = tmp + '|'
    if (i == 32){
        span.innerHTML = tmp
        clearInterval(interv)
    }
    i++
},100)



setTimeout(function(){
    tap.innerHTML = 'Tap..'
},4000)
