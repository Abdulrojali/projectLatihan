

let button=document.querySelector('.dropColor')
button.addEventListener('click',function(){
    let r=Math.floor(Math.random()*265)
    let g=Math.floor(Math.random()*265)
    let b=Math.floor(Math.random()*265)
    document.querySelector('body').style.backgroundColor=`rgb(${r},${g},${b})`
    let teks=`rgb(${r},${g},${b})`
    document.querySelector('.inputTeks').innerHTML=teks
})