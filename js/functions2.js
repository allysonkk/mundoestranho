

function audio(song){
  var myAudio = document.getElementsByTagName('audio')[song];
  myAudio.play();
}

$('.embaralhar').click(function() {
  audio(5);
  return false; 
});


