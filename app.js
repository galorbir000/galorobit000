
var x=0;
var container = document.getElementById('typewriter');


var typewriter ='Front-end web Developer-<name>Biruk G.</name>';

function animate(){
  if ( x<typewriter.length){
    container.innerHTML+= typewriter.charAt(x);
  
    x++;

    setTimeout(animate, 200);
  }

}
animate();
