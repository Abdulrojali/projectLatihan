let content=document.querySelectorAll('.content')
content.forEach(ctn=>{
    ctn.addEventListener('click',function(){
        if(ctn.classList.contains('landingpage')){
            window.location.href='landingpage.html'
        }
        else if(ctn.classList.contains('loginwebsite')){
            window.location.href='loginwebsite.html'
        }
        else if(ctn.classList.contains('calculator')){
            window.location.href='calculator.html'
        }
        else if(ctn.classList.contains('marketplace')){
            window.location.href='marketplace.html'
        }
        else if(ctn.classList.contains('bmicalculator')){
            window.location.href='bmicalculator.html'
        }
        else if(ctn.classList.contains('coffeshop')){
            window.location.href='coffeshop.html'
        }
        else if(ctn.classList.contains('tekateki')){
            window.location.href='tekateki.html'
        }
        else if(ctn.classList.contains('guntingkertas')){
            window.location.href='guntingkertas.html'
        }
    })
})