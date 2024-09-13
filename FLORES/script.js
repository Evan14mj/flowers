onload = () => {
  document.body.classList.remove("container");
};

document.getElementById('playButton').addEventListener('click', function() {
  var audio = document.getElementById('audioPlayer');
  if (audio.paused) {
      audio.play();
      this.innerHTML = '<span>❚❚</span>'; // Cambia el icono cuando se reproduce
  } else {
      audio.pause();
      this.innerHTML = '<span>❤</span>'; // Cambia el icono cuando está en pausa
  }
});