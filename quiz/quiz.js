let items=document.querySelectorAll(".item")
let count=0;
window.addEventListener('DOMContentLoaded',function(){
    items[count].style.display='flex'
})
function loopingitems(items){
    count++
    if(count>items.length-1){
        count=0;
    }
    for(let i=0;i<items.length; i++){
        items[i].style.display='none'
    }
    items[count].style.display='flex'
}
function minuslooping(items){
    count--
    if(count<0){
        count=items.length-1
    }
    for(let i=0;i<items.length; i++){
        items[i].style.display='none'
    }
    items[count].style.display='flex'
}
let prev=document.querySelector(".prev").addEventListener('click',function(){
    minuslooping(items)
})
let next=document.querySelector('.next').addEventListener('click',function(){
    loopingitems(items)
})

let play=document.querySelector('.play')
let cancel=document.querySelector('.cancel')

play.addEventListener('click',function(){
    document.querySelector('.contentquestion').style.display='flex'
    document.querySelector(".contentplayquest").style.display='none'
    document.querySelector('.score').style.display='flex'
})
cancel.addEventListener('click',function(){
    window.location.assign('testing.html')
})
function clickme(guest){
    if(guest==true){
        count++ 
        for(let i=0;i<items.length; i++){
            items[i].style.display='none'
        }
        items[count].style.display='flex'
        document.querySelector('.nilai').innerHTML=`${count}0`
    }
    else{
        alert('answer failed')
    }
}
let ulang=document.querySelector('.ulang')
ulang.addEventListener('click',function(){
  window.location.assign('quiz.html')  
})