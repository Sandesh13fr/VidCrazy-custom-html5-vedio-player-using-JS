const toggle = document.getElementsByClassName("toggle")
const vedio = document.getElementById("vedio")
const backward = document.getElementById("backward")
const forward = document.getElementById("forward")
const volumeSlider = document.getElementById("volume")
const progress = document.getElementById("progressFill")
const scrub = document.getElementById("scrub")
let counter = 0 

vedio.addEventListener("loadedmetadata", () => {
    scrub.max = vedio.duration;
})
scrub.addEventListener("input",(event)=>{
    vedio.currentTime = parseFloat(scrub.value);
})
window.addEventListener("keydown",(event)=>{
    event.preventDefault();
    if (event.code =="Space") {
        togglePlayPause();
    }else if(event.code =="ArrowLeft"){
    vedio.currentTime-=10;
    }else if(event.code == "ArrowRight"){
    vedio.currentTime+=10;
    }else if(event.code == "ArrowUp"){
        vedio.volume-=(vedio.volume%0.10)
    }else if (event.code == "ArrowUp") {
        vedio.volume+=(vedio.volume%0.10)
    }else if (video.currentTime < video.duration && video.paused) {
        vedio.play();
    }
})
toggle[0].addEventListener("click",()=>{
    togglePlayPause();
})
vedio.addEventListener("click",()=>{
    togglePlayPause();
})
function togglePlayPause() {
    if (counter ==0 || vedio.paused) {
        vedio.play()
        counter=1
        toggle[0].innerHTML="▐▐"
        toggle[0].setAttribute("title","Pause")
    } else {
        vedio.pause()
        counter=0
        toggle[0].innerHTML="▶"
        toggle[0].setAttribute("title","PLay")
    }
}
function timeUpdate() {
    let Setprogress = (vedio.currentTime/vedio.duration)*100;
    progress.style.flexBasis=`${Setprogress}%`
}
vedio.addEventListener("timeupdate",()=>{
    timeUpdate();
    scrub.value=vedio.currentTime;
})
vedio.addEventListener("ended",()=>{
    toggle[0].innerHTML="▶";
})
backward.addEventListener("click",()=>{
    vedio.currentTime-=10;
})
forward.addEventListener("click",()=>{
    vedio.currentTime+=25;
})
volumeSlider.addEventListener("input",()=>{
    let val = parseFloat(volumeSlider.value);
    vedio.volume = Math.min(1, Math.max(0, val)); 
})


