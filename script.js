document.body.style.display = "block"

if(typeof(window.google_jobrunner) == "undefined") {
    document.body.innerHTML = "<div id='bas'><h1>knk adblock kptrmsn</h1></div>"
}

setInterval(() => {
    document.getElementById("bas").style.height = window.innerHeight + "px"
    document.getElementById("bas").style.width = "100%"
    document.getElementById("bas").style.transition = "0.2s"

    if (typeof window.orientation !== 'undefined') {
        document.body.classList.add("mobil")
        document.getElementById("btns").style.display = "block"
    }   
});
