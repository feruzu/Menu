let img = document.querySelectorAll('img');

color();
function color() {
    img.forEach(function(imagen) {
      imagen.addEventListener('click', function() {
        img.forEach(function(img) {
          if (img === imagen) {
            img.classList.toggle('color'); 
          } else {
            img.classList.remove('color'); 
          }
        });
      });
    });
  }
  