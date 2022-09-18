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
priestCont[2].style.height="100%"


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
    clear()
 appendImages()
},3000)

function appendImages(){
    for(var f=0; f<=priestCont.length-1;f++){
        console.log(f)
        priestCont[f].style.display='block'
       
left.append(priestCont[f])
// main.append(priestCont[f])
// right.append(priestCont[f])
    }
}
