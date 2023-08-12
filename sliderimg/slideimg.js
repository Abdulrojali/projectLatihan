let img=['girl1.jpg','girl2.jpg','girl3.jpg','man1.jpg','man2.jpg']
console.log(img)
let left=document.querySelector('.left')
let count=0;
left.addEventListener('click',function(){
    count++
    if(count>img.length-1){
        count=0
    }
    else if(count<0){
        count=img.length-1
    }
    getCount(count)
})
let right=document.querySelector('.right')
right.addEventListener('click',function(){
    count--
    if(count>img.length-1){
        count=0
    }
    else if(count<0){
        count=img.length-1
    }
    getCount(count)
})
function getCount(count){
    document.querySelector('.content img').src=img[count]
}
window.addEventListener('click',function(){
    getCount(count)
})