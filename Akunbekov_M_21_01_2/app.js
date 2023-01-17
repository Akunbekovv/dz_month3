
//
const blockInner = document.querySelector('.block_inner')
let positionX = 0
let positionY = 0
let move = () =>{
    if(positionX <= 440 && positionY <= 0){
        positionX += 16
        blockInner.style.left = `${positionX}px`
        setTimeout(move, 9)
    }else if(positionX >= 440 && positionY <= 440){
        positionY +=16
        blockInner.style.top = `${positionY}px`
        setTimeout(move, 9)
    } else if(positionY === 448 && positionX !==0){
        positionX -= 16
        blockInner.style.left = `${positionX}px`
        setTimeout(move, 9)
    } else {
        positionY -= 16
        blockInner.style.top = `${positionY}px`
        setTimeout(move,9)
    }

}
move()

//

const h2 = document.querySelector('.h2')
let a = 0;
const set = setInterval(()=>{
    a++
    h2.innerText = a
},1000)
setTimeout(()=>{
    clearInterval(set)
}, 60000)

