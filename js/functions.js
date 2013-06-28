var rotateAngle = 0;            // The return for verification
var imageBeingRotated = false;  // The DOM image currently being rotated (if any)
var mouseStartAngle = false;    // The angle of the mouse relative to the image centre at the start of the rotation
var imageStartAngle = false;    // The rotation angle of the image at the start of the rotation
var aceso = 1;

var validacao = new Array();
var solucaoA = new Array(8, 6, 2, 7, 8); //new Array(8, 2, 6, 1, 5);
var solucaoB = new Array(1, 3, 5, 6, 2); //new Array(7, 5, 1, 5, 6);
var solucaoC = new Array(2, 4, 3, 5, 3); //new Array(1, 4, 5, 3, 8);
var solucaoD = new Array(3, 5, 4, 8, 5); //new Array(5, 3, 4, 8, 3);
var solucaoE = new Array(4, 2, 8, 1, 4); //new Array(4, 6, 8, 7, 4);
var solucaoF = new Array(5, 1, 6, 2, 6); //new Array(3, 7, 2, 6, 2);
var solucaoG = new Array(6, 8, 7, 3, 1); //new Array(2, 8, 1, 5, 7);
var solucaoH = new Array(7, 7, 1, 4, 7); //new Array(6, 1, 7, 4, 1);

function fix_position(elemento, current_rotation, indice){
  var num = Math.round(current_rotation * 10) / 10;
  var elemento_index = indice;
  if((num > 1.1) && (num <= 1.9)){
    elemento.css({
      'transform': 'rotate(' + 90 + 'deg)',
      '-moz-transform': 'rotate(' + 90 + 'deg)',
      '-webkit-transform': 'rotate(' + 90 + 'deg)',
      '-o-transform': 'rotate(' + 90 + 'deg)'
    });
    elemento.data('currentRotation', 90 * Math.PI / 180 );
    validacao[elemento_index] = 1;
  }
  else if((num > 1.9) && (num <= 2.7)){
    elemento.css({
      'transform': 'rotate(' + 135 + 'deg)',
      '-moz-transform': 'rotate(' + 135 + 'deg)',
      '-webkit-transform': 'rotate(' + 135 + 'deg)',
      '-o-transform': 'rotate(' + 135 + 'deg)'
    });
    elemento.data('currentRotation', 135 * Math.PI / 180 );
    validacao[elemento_index] = 2;
  }
  else if((num > 2.7) && (num <= 3.5)){
    elemento.css({
      'transform': 'rotate(' + 180 + 'deg)',
      '-moz-transform': 'rotate(' + 180 + 'deg)',
      '-webkit-transform': 'rotate(' + 180 + 'deg)',
      '-o-transform': 'rotate(' + 180 + 'deg)'
    });
    elemento.data('currentRotation', 180 * Math.PI / 180 );
    validacao[elemento_index] = 3;
  }
  else if((num > 3.5) && (num <= 4.3)){
    elemento.css({
      'transform': 'rotate(' + 225 + 'deg)',
      '-moz-transform': 'rotate(' + 225 + 'deg)',
      '-webkit-transform': 'rotate(' + 225 + 'deg)',
      '-o-transform': 'rotate(' + 225 + 'deg)'
    });
    elemento.data('currentRotation', 225 * Math.PI / 180 );
    validacao[elemento_index] = 4;
  }
  else if((num > 4.3) && (num <= 5.1)){
    elemento.css({
      'transform': 'rotate(' + 270 + 'deg)',
      '-moz-transform': 'rotate(' + 270 + 'deg)',
      '-webkit-transform': 'rotate(' + 270 + 'deg)',
      '-o-transform': 'rotate(' + 270 + 'deg)'
    });
    elemento.data('currentRotation', 270 * Math.PI / 180 );
    validacao[elemento_index] = 5;
  }
  else if((num > 5.1) && (num <= 5.8)){
    elemento.css({
      'transform': 'rotate(' + 315 + 'deg)',
      '-moz-transform': 'rotate(' + 315 + 'deg)',
      '-webkit-transform': 'rotate(' + 315 + 'deg)',
      '-o-transform': 'rotate(' + 315 + 'deg)'
    });
    elemento.data('currentRotation', 315 * Math.PI / 180 );
    validacao[elemento_index] = 6;
  }
  else if((num > 5.8) && (num <= 6.6)){
    elemento.css({
      'transform': 'rotate(' + 360 + 'deg)',
      '-moz-transform': 'rotate(' + 360 + 'deg)',
      '-webkit-transform': 'rotate(' + 360 + 'deg)',
      '-o-transform': 'rotate(' + 360 + 'deg)'
    });
    elemento.data('currentRotation', 360 * Math.PI / 180 );
    validacao[elemento_index] = 7;
  }
  else if((num > 6.6) && (num <= 7.4)){
    elemento.css({
      'transform': 'rotate(' + 405 + 'deg)',
      '-moz-transform': 'rotate(' + 405 + 'deg)',
      '-webkit-transform': 'rotate(' + 405 + 'deg)',
      '-o-transform': 'rotate(' + 405 + 'deg)'
    });
    elemento.data('currentRotation', 405 * Math.PI / 180 );
    validacao[elemento_index] = 8;
  }
  else {
    if (validacao[elemento_index] == 1) {
      elemento.css({
        'transform': 'rotate(' + 405 + 'deg)',
        '-moz-transform': 'rotate(' + 405 + 'deg)',
        '-webkit-transform': 'rotate(' + 405 + 'deg)',
        '-o-transform': 'rotate(' + 405 + 'deg)'
      });
      elemento.data('currentRotation', 405 * Math.PI / 180 );
      validacao[elemento_index] = 8;
    } else {
      elemento.css({
        'transform': 'rotate(' + 90 + 'deg)',
        '-moz-transform': 'rotate(' + 90 + 'deg)',
        '-webkit-transform': 'rotate(' + 90 + 'deg)',
        '-o-transform': 'rotate(' + 90 + 'deg)'
      });
      elemento.data('currentRotation', 90 * Math.PI / 180 );
      validacao[elemento_index] = 1;
    }
  }
  solucao();
}

$(document).ready(function() {

  $('body').append('<audio><source src="audio/rodela-1.mp3" type="audio/mp3" /></audio>');
  $('body').append('<audio><source src="audio/rodela-2.mp3" type="audio/mp3" /></audio>');
  $('body').append('<audio><source src="audio/rodela-3.mp3" type="audio/mp3" /></audio>');
  $('body').append('<audio><source src="audio/rodela-4.mp3" type="audio/mp3" /></audio>');
  $('body').append('<audio><source src="audio/rodela-5.mp3" type="audio/mp3" /></audio>');
  $('body').append('<audio><source src="audio/acerto.mp3" type="audio/mp3" /></audio>'); 

  $('.links li').bind('click', function(event) {
    $('.texto li').css('display', 'none');
    //$('.texto li:eq('+$(this).index()+')').css('display', 'block');
    $('.historia'+$(this).index()).css('display', 'block').animate({ "opacity": 1 }, 300);
    return false;
  });

  $('.solucao li').bind('click', function(event) {
    $('.solucao li').css('display', 'none').animate({ "opacity": 0 }, 500);
    //$('.mantem span').css('opacity', '1');
    //embaralha();
  });

  $('.texto li').bind('click', function(event) {
    $('.texto li').css('display', 'none').animate({ "opacity": 0 }, 500);
  });

  $('.embaralhar').bind('click', function() {
    //audio(0);
    $('.mantem span').css('opacity', '1');
    embaralha();
    return false; 
  });

  $( document ).on( "vmouseup", "#lighttable a", function(event) {
    // Exit if we're not rotating an image
    if ( !imageBeingRotated ) return;

    var img = $(this).html();

    imageRotated = $('#lighttable img').get(img);

    var rotation = $(imageRotated).data('currentRotation');

    fix_position($(imageRotated), rotation, img);

    // Remove the event handler that tracked mouse movements during the rotation
    $(document).unbind( 'vmousemove' );
    imageBeingRotated = false;

    audio_stop(img);
    mostra_certo();

    return false;
  });

  $( document ).on( "vmousedown", "#lighttable a", function(event) {
    // Track the image that we're going to rotate
    var img = $(this).html();

    imageBeingRotated = $('#lighttable img').get(img);

    audio(img);
    
    // Store the angle of the mouse at the start of the rotation, relative to the image centre
    var imageCentre = getImageCentre( imageBeingRotated );
    var mouseStartXFromCentre = event.pageX - imageCentre[0];
    var mouseStartYFromCentre = event.pageY - imageCentre[1];
    mouseStartAngle = Math.atan2( mouseStartYFromCentre, mouseStartXFromCentre );

    // Store the current rotation angle of the image at the start of the rotation
    imageStartAngle = $(imageBeingRotated).data('currentRotation');

    // Set up an event handler to rotate the image as the mouse is moved
    $( document ).on( "vmousemove", "#lighttable a", function(event) {
      //var imageCentre = getImageCentre( imageBeingRotated );

      var mouseXFromCentre = event.pageX - imageCentre[0];
      var mouseYFromCentre = event.pageY - imageCentre[1];
      var mouseAngle = Math.atan2( mouseYFromCentre, mouseXFromCentre );

      // Calculate the new rotation angle for the image
      rotateAngle = mouseAngle - mouseStartAngle + imageStartAngle;

      // Rotate the image to the new angle, and store the new angle
      $(imageBeingRotated).css('transform','rotate(' + rotateAngle + 'rad)');
      $(imageBeingRotated).css('-moz-transform','rotate(' + rotateAngle + 'rad)');
      $(imageBeingRotated).css('-webkit-transform','rotate(' + rotateAngle + 'rad)');
      $(imageBeingRotated).css('-o-transform','rotate(' + rotateAngle + 'rad)');
      $(imageBeingRotated).data('currentRotation', rotateAngle );

      return false;

    });

    return false;
  });

  function embaralha(){
    $('#lighttable img').each( function(index) {

      var angle = Math.floor((Math.random() * 300) + 120); //alterar com rand aqui para embaralhar
      $(this).css( 'transform', 'rotate(' + angle + 'deg)' );   
      $(this).css( '-moz-transform', 'rotate(' + angle + 'deg)' );   
      $(this).css( '-webkit-transform', 'rotate(' + angle + 'deg)' );
      $(this).css( '-o-transform', 'rotate(' + angle + 'deg)' );
      $(this).data('currentRotation', angle * Math.PI / 180 );

      var rotation = angle * Math.PI / 180;

      fix_position($(this), rotation, index);

    });
  }

  embaralha();

});

// attach the .compare method to Array's prototype to call it on any array
Array.prototype.compare = function (array) {
  // if the other array is a falsy value, return
  if (!array)
      return false;

  // compare lengths - can save a lot of time
  if (this.length != array.length)
    return false;

  for (var i = 0; i < this.length; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this[i].compare(array[i]))
            return false;
    }
    else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
    }
  }
  return true;
}

function solucao(){
  if (validacao.compare(solucaoA)){
    $('.solucao2').css('display', 'block').animate({ "opacity": 1 }, 500);
  }
  else if(validacao.compare(solucaoB)){
    $('.solucao5').css('display', 'block').animate({ "opacity": 1 }, 500);
  }
  else if(validacao.compare(solucaoC)){
    $('.solucao1').css('display', 'block').animate({ "opacity": 1 }, 500);
  }
  else if(validacao.compare(solucaoD)){
    $('.solucao6').css('display', 'block').animate({ "opacity": 1 }, 500);
  }
  else if(validacao.compare(solucaoE)){
    $('.solucao7').css('display', 'block').animate({ "opacity": 1 }, 500);
  }
  else if(validacao.compare(solucaoF)){
    $('.solucao4').css('display', 'block').animate({ "opacity": 1 }, 500);
  }
  else if(validacao.compare(solucaoG)){
    $('.solucao0').css('display', 'block').animate({ "opacity": 1 }, 500);
  }
  else if(validacao.compare(solucaoH)){
    $('.solucao3').css('display', 'block').animate({ "opacity": 1 }, 500);
  }
}

function mostra_certo(){
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;
  var count6 = 0;
  var count7 = 0;
  var count8 = 0;

  var som_acerto = 0;

  //$('.mantem span').css('opacity', '1');

  for(i=0; i<=4; i++){
    if (validacao[i] == solucaoA[i]){
      count1++;
    }
  }

  for(i=0; i<=4; i++){
    if (validacao[i] == solucaoB[i]){
      count2++;
    }
  }

  for(i=0; i<=4; i++){
    if (validacao[i] == solucaoC[i]){
      count3++;
    }
  }

  for(i=0; i<=4; i++){
    if (validacao[i] == solucaoD[i]){
      count4++;
    }
  }

  for(i=0; i<=4; i++){
    if (validacao[i] == solucaoE[i]){
      count5++;
    }
  }

  for(i=0; i<=4; i++){
    if (validacao[i] == solucaoF[i]){
      count6++;
    }
  }

  for(i=0; i<=4; i++){
    if (validacao[i] == solucaoG[i]){
      count7++;
    }
  }

  for(i=0; i<=4; i++){
    if (validacao[i] == solucaoH[i]){
      count8++;
    }
  }

  console.log("A = "+count1);
  console.log("B = "+count2);
  console.log("C = "+count3);
  console.log("D = "+count4);
  console.log("E = "+count5);
  console.log("F = "+count6);
  console.log("G = "+count7);
  console.log("H = "+count8);

  if((count1 > count2) && (count1 > count3) && (count1 > count4) && (count1 > count5) && (count1 > count6) && (count1 > count7) && (count1 > count8)) {
    for(i=0; i<=4; i++){
      if (validacao[i] == solucaoA[i]){
        $('.mostra_certo span').eq(i).css('opacity', '1').animate({
          "opacity": 0
        }, 300);
        $('.mantem span').eq(i).css('opacity', '0').animate({
          "opacity": 0
        }, 300);
      }
    }
    som_acerto++;
    aceso = 1;
    console.log("acende A");
  }

  if((count2 > count1) && (count2 > count3) && (count2 > count4) && (count2 > count5) && (count2 > count6) && (count2 > count7) && (count2 > count8)) {
    if(som_acerto == 0) {
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoB[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
      som_acerto++;
      aceso = 2;
      console.log("acende B");
    }
  }

  if((count3 > count1) && (count3 > count2) && (count3 > count4) && (count3 > count5) && (count3 > count6) && (count3 > count7) && (count3 > count8)) {
    if(som_acerto == 0) {
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoC[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
      som_acerto++;
      aceso = 3;
      console.log("acende C");
    }
  }

  if((count4 > count1) && (count4 > count2) && (count4 > count3) && (count4 > count5) && (count4 > count6) && (count4 > count7) && (count4 > count8)) {
    if(som_acerto == 0) {
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoD[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
      som_acerto++;
      aceso = 4;
      console.log("acende D");
    }
  }

  if((count5 > count1) && (count5 > count2) && (count5 > count3) && (count5 > count4) && (count5 > count6) && (count5 > count7) && (count5 > count8)) {
    if(som_acerto == 0) {
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoE[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
      som_acerto++;
      aceso = 5;
      console.log("acende E");
    }
  }

  if((count6 > count1) && (count6 > count2) && (count6 > count3) && (count6 > count4) && (count6 > count5) && (count6 > count7) && (count6 > count8)) {
    if(som_acerto == 0) {
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoF[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
      som_acerto++;
      aceso = 6;
      console.log("acende F");
    }
  }

  if((count7 > count1) && (count7 > count2) && (count7 > count3) && (count7 > count4) && (count7 > count5) && (count7 > count6) && (count7 > count8)) {
    if(som_acerto == 0) {
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoG[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
      som_acerto++;
      aceso = 7;
      console.log("acende G");
    }
  }

  if((count8 > count1) && (count8 > count2) && (count8 > count3) && (count8 > count4) && (count8 > count5) && (count8 > count6) && (count8 > count7)) {
    //if(som_acerto == 0) {
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoH[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
      som_acerto++;
      aceso = 8;
      console.log("acende H");
    //}
  }

  if((count1 == count2) || (count1 == count3) || (count1 == count4) || (count1 == count5) || (count1 == count6) 
    || (count1 == count7) || (count1 == count8) || (count2 == count3) || (count2 == count4) || (count2 == count5) 
    || (count2 == count6) || (count2 == count7) || (count2 == count8) || (count3 == count4) || (count3 == count5) 
    || (count3 == count6) || (count3 == count7) || (count3 == count8) || (count4 == count5) || (count4 == count6) 
    || (count4 == count7) || (count4 == count8) || (count5 == count6) || (count5 == count7) || (count5 == count8) 
    || (count6 == count7) || (count6 == count8) || (count7 == count8)) {

    if(aceso == 1){
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoA[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
    } else if (aceso == 2){
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoB[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
    } else if (aceso == 3){
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoC[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
    } else if (aceso == 4){
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoD[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
    } else if (aceso == 5){
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoE[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
    } else if (aceso == 6){
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoF[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
    } else if (aceso == 7){
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoG[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
    } else if (aceso == 8){
      for(i=0; i<=4; i++){
        if (validacao[i] == solucaoH[i]){
          $('.mostra_certo span').eq(i).css('opacity', '1').animate({
            "opacity": 0
          }, 300);
          $('.mantem span').eq(i).css('opacity', '0').animate({
            "opacity": 0
          }, 300);
        }
      }
    }
    som_acerto++;
  }

  console.log("aceso = "+aceso);

  if(som_acerto > 0) {
    $('.mantem span').css('opacity', '1');
    audio(5);
    som_acerto = 0;
  }
}

function audio(song){
  var myAudio = document.getElementsByTagName('audio')[song];
  myAudio.play();
}

function audio_stop(song){
  var myAudio = document.getElementsByTagName('audio')[song];
  myAudio.pause();
}

// Calculate the centre point of a given image

function getImageCentre( image ) {

  // Measure the image centre
  var imageOffset = $(image).offset();
  var imageCentreX = imageOffset.left + $(image).width() / 2;
  var imageCentreY = imageOffset.top + $(image).height() / 2;

  // Rotate the image back to its previous angle
  var currentRotation = $(image).data('currentRotation');
  $(imageBeingRotated).css('transform','rotate(' + currentRotation + 'rad)');
  $(imageBeingRotated).css('-moz-transform','rotate(' + currentRotation + 'rad)');
  $(imageBeingRotated).css('-webkit-transform','rotate(' + currentRotation + 'rad)');
  $(imageBeingRotated).css('-o-transform','rotate(' + currentRotation + 'rad)');

  // Return the calculated centre coordinates
  return Array( imageCentreX, imageCentreY );
}