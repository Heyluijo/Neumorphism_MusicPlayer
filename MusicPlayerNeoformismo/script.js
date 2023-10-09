function navG() {
    var x = document.getElementsById("navMenu");
  
    if (x.classList.contains("nav")) {
      x.classList.remove("nav");
      x.classList.add("navAbierto");
    } else {
      x.classList.remove("navAbierto");
      x.classList.add("nav");
    }
  }

  var au = document.getElementById("1");
  const volumenControl = document.getElementById('volumen');

  
  
  function playAudio(){

        au.play();
}

    function pauseAudio(){
        au.pause();
}

    function resetAudio(){
        au.currentTime = 0;
        au.pause();
}


    // Volumen // 
    const inputVolumen = document.getElementById('volumen');
    
    au.volume = 1;
    
    inputVolumen.addEventListener('input', function() {
      const nuevoVolumen = parseFloat(inputVolumen.value);
      au.volume = nuevoVolumen;
    });


