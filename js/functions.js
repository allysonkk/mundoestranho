function audio(song){
  var myAudio = document.getElementsByTagName('audio')[song];
  myAudio.play();
}

$('a').click(function() {
  audio(0);
  return false; 
});
