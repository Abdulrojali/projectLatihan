let questionItem=document.querySelectorAll('.questionItem')
questionItem.forEach(eventQuest=>{
    eventQuest.addEventListener('click',function(questTarget){
        let sibling=questTarget.target.nextElementSibling
        sibling.classList.toggle('add')
        let pLast=sibling.children
       pLast[1].classList.toggle('add')
    })
})