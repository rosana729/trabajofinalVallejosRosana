const video = document.querySelector("#video")

document.querySelector(".fa-pause").style.display = "none"

video.addEventListener("timeupdate", () => {
    let curr = (video.currentTime / video.duration) * 100
    if(video.ended){
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
    }
    document.querySelector('.inner').style.width = `${curr}%`
})

const play = (e) => {

    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}

const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}

const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src 
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

const rewind = (e) => {
    video.currentTime = video.currentTime - ((video.duration/100) * 5)
}
const forward = (e) => {
    video.currentTime = video.currentTime + ((video.duration/100) * 5)
}
const duration = document.querySelector('.duration');
video.addEventListener('timeupdate', () => {
  // Actualizar la duración mostrada en el elemento HTML
  duration.textContent = formatTime(video.duration);
  
  // Resto del código del evento timeupdate
});
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

var dragged;
  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    dragged = event.target;
    event.dataTransfer.setData('text', event.target.id);
  }

  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(dragged);
    event.target.querySelector('p').style.display = 'none'; // Oculta el texto dentro del dropzone
  }
    // Centra la imagen dentro del dropzone
var imagen = dragged;
var contenedor = event.target;
var diferenciaX = (contenedor.clientWidth - imagen.width) / 2;
var diferenciaY = (contenedor.clientHeight - imagen.height) / 2;
var nuevaPosX = event.pageX - contenedor.getBoundingClientRect().left - diferenciaX;
var nuevaPosY = event.pageY - contenedor.getBoundingClientRect().top - diferenciaX;
dragged.style.position = 'absolute';
dragged.style.left = nuevaPosX + 'px';
dragged.style.top = nuevaPosY + 'px';


