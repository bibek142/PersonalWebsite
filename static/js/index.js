burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');

})





darkBtn = document.querySelector('.darkbtn')
darkmode = document.querySelector('.body') 
darkButton = document.getElementById('darkButton');

darkBtn.addEventListener('click', ()=>{
    darkmode.classList.toggle('body');
    if ( darkmode.classList.contains('body')) {
        darkButton.classList.add('fa-sun');
        darkButton.classList.remove('fa-moon');
        alert("Enables Darkmode");
    } else {
        darkButton.classList.remove('fa-sun');
        darkButton.classList.add('fa-moon');
        alert("Dark mode will be disabled");
    }
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


var notification
var interval
document.addEventListener("visibilitychange", () =>{
    if(document.visibilityState === "hidden"){
        const leaveDate = new Date()
        interval = setInterval(()=>{
            notification = new Notification("Come Back Please", {
                body: `You have been gone for ${Math.round(
                    (new Date() - leaveDate) /1000
                )} seconds`,
                tag: "Come Back",
            })
        }, 100)
    }else{
        if (interval) clearInterval(interval)
        if (notification) notification.close()
    }
})