let dm=document.querySelectorAll('.darkontent i')
dm.forEach(button=>{
    button.addEventListener('click',function(btn){
       let btntarget=btn.target.id
       if(btntarget=='dark'){
        document.body.classList.add('darkmode')
        document.querySelector('.teks h3').innerHTML='background black'
       }
       else if(btntarget=='white'){
        document.body.classList.add('whitemode')
        document.body.classList.remove('darkmode')
        document.querySelector('.teks h3').innerHTML='background white'
       }
    })
})