let content=[
    {
    nama:'albert',
    img:'man1.jpg',
    job:'web developers',
    about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae deleniti aut natus commodi consectetur.',
},
{
    nama:"jhone",
    img:'man2.jpg',
    job:'mobile developer',
    about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae deleniti aut natus commodi consectetur.',
},
{
    nama:'kelvin',
    img:'girl1.jpg',
    job:'game developers',
    about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae deleniti aut natus commodi consectetur.',
},
{
    nama:'margaret',
    img:'girl2.jpg',
    job:'freelance',
    about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae deleniti aut natus commodi consectetur.',
},
{
    nama:'siska',
    img:'girl3.jpg',
    job:'pengangguran',
    about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae deleniti aut natus commodi consectetur.',
},
]

let img=document.querySelector('.img')
let nama=document.querySelector('.name')
let job=document.querySelector('.job')
let about=document.querySelector('.about')


let current=0;
console.log(content[current])
window.addEventListener('DOMContentLoaded',function(){
  showPerson(current)
})

function showPerson(current){
    let items=content[current]    
    img.src=items.img
    nama.textContent=items.nama
    job.textContent=items.job
    about.textContent=items.about
}
let left=document.querySelector('.left')
let right=document.querySelector('.right')

left.addEventListener('click',function(){
    current++
    if(current>content.length){current=0}
    else if(current<0){current=content.length-1}
    showPerson(current)
})
right.addEventListener('click',function(){
    current--
    if(current>content.length){current=0}
    else if(current<0){current=content.length-1}
    showPerson(current)
})