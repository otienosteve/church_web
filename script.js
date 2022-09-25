let year= new Date()
year=year.getFullYear();
document.getElementById('year').textContent=year

document.addEventListener('click',(navbar)=>{
    var nav= document.getElementByID("navbar")
    nav.style.backgroundColor="green"
}
)
document.getElementById("pop").addEventListener("click", ()=>{
    document.getElementById("links2").style.display="block"
    document.getElementById("cancl").style.display="block"
})
// document.getElementById("cancl").addEventListener('click',()=>{
//     document.getElementById("links2").style.display="none"
//     document.getElementById("cancl").style.display="none"
// })
const carouselItems=document.querySelectorAll('div.preist-info')
const priestCont=document.querySelectorAll(".former-priest-cont")
// console.log(priestCont)
// priestCont[2].style.height="100%"


function Clear(){
    priestCont.forEach(elem=>{
        elem.style.display='none'
       })
}
let left=document.querySelector('.left')
let right=document.querySelector('.right')

let main=document.querySelector('.main-priest')
console.log(left,right,main)
setInterval(()=>{
    Clear()
 appendImages()
},3000)
const track=0
function appendImages(){
    if (track===priestCont.length-1){
        track=0
    }
  
        priestCont[track].style.display='block'
        priestCont[track+1].style.display='block'
        priestCont[track+2].style.display='block'
    left.append(priestCont[track])   
main.append(priestCont[track+1])
right.append(priestCont[track+2])
// main.append(priestCont[f])
// right.append(priestCont[f])
    
}


