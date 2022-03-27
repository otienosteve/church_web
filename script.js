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

