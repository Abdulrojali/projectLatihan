let count=0;
let button=document.querySelectorAll('button')
button.forEach(btn=>{
    btn.addEventListener('click',function(e){
        if(e.target.className=='countNumber'){
            count++
            document.querySelector('.content').innerHTML=count
        }
        else if(e.target.className=='minNumber'){
            count--
            document.querySelector('.content').innerHTML=count
        }
        else{
            count=0
            document.querySelector('.content').innerHTML=count
        }
    })
})