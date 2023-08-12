let listContent=[
    {
        img:'cake1.jpg',
        judul:'kue enak',
        paragraf:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore reprehenderit, ducimus ut facilis illo possimus',
        kategory:'new'
    },
    {
        img:'cake2.jpg',
        judul:'kue inggris',
        paragraf:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore reprehenderit, ducimus ut facilis illo possimus',
        kategory:'new'
    },
    {
        img:'cake3.webp',
        judul:'kue belanda',
        paragraf:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore reprehenderit, ducimus ut facilis illo possimus',
        kategory:'hot'
    },
    {
        img:'cake4.webp',
        judul:'kue australia',
        paragraf:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore reprehenderit, ducimus ut facilis illo possimus',
        kategory:'new'
    },
]
window.addEventListener('DOMContentLoaded',function(){
    listLooping(listContent)
})
function listLooping(list){
  let mappingList= list.map(function(items){
    return `<div class="menucontent"><img src="${items.img}" alt=""><h3 class="judul">${items.judul}</h3><p class="deskripsi">${items.paragraf}</p></div>`
    })
    mappingList.join("")
    document.querySelector('.sectioncontent').innerHTML=mappingList
}
let a=document.querySelectorAll('.contentpertama li a')
a.forEach(el=>{
    el.addEventListener('click',function(event){
        event.preventDefault()
        let btnA=event.target.className
        let filterList=listContent.filter(function(content){
            if(btnA==content.kategory){
                return content
            }
        })
        if(btnA=='all'){
            listLooping(listContent)
        }
        else{
            listLooping(filterList)
        }
    })
})