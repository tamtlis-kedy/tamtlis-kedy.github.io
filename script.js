document.body.style.display = "block"

var divs = document.getElementsByTagName("img");
for(var i = 0; i < divs.length; i++){
   divs[i].src = "https://c.tenor.com/EGarfj-9xXMAAAAC/the-vibin-cheese-dance.gif"
}
var divs = document.getElementsByTagName("div");
for(var i = 0; i < divs.length; i++){
   divs[i].style.background = "url('https://c.tenor.com/EGarfj-9xXMAAAAC/the-vibin-cheese-dance.gif')"
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
