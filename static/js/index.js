burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');

})





darkBtn = document.querySelector('.darkbtn')
darkmode = document.querySelector('.body') 

darkBtn.addEventListener('click', ()=>{
    darkmode.classList.toggle('body');
})


fullContent = document.querySelector('.fullContent')
pbox = document.querySelector('.pbox')

fullContent.addEventListener('click', ()=>{
    pbox.classList.toggle('pbox-full')
})
fullContentSec = document.querySelector('.fullContentSec')
pboxSec = document.querySelector('.pboxSec')

fullContentSec.addEventListener('click', ()=>{
    pboxSec.classList.toggle('pbox-fullSec')
})



fullContentBg = document.querySelector('.fullContentBig')
pboxBig = document.querySelector('.pbox-big')

fullContentBg.addEventListener('click', ()=>{
    pboxBig.classList.toggle('pbox-bgfull')
})
fullContentBgSec = document.querySelector('.fullContentBigSec')
pboxBigSec = document.querySelector('.pbox-bigSec')

fullContentBgSec.addEventListener('click', ()=>{
    pboxBigSec.classList.toggle('pbox-bgfullSec')
})