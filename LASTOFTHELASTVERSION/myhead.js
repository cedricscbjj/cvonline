tippy('#getImage', {
    content: 'Salut! tu peux cliquer sur moi!',

  });




  function imagefun() {
    const body = document.querySelector('body');
var imagetitre = document.getElementById('imagetitre')

var salutation = document.getElementById('talk');
  var Image_Id = document.getElementById('getImage');
  if (Image_Id.src.match("IMGTEST.png")) {
      Image_Id.src = "IMGTEST1.png";
      
  }
  else if (Image_Id.src.match("IMGTEST1.png")) {
      Image_Id.src = "IMGTEST2.png";
            ;
  }
else

{
      Image_Id.src = "trex.png";
      document.body.style.backgroundImage = "url('trex.png')";
    document.getElementById("formation1").innerHTML ='Tel un éclair incontrôlé, un simple clic dévastateur peut réduire à néant en un battement de cil ce que des années de construction patiente avaient érigé avec soin';
    document.getElementById("salut").innerHTML ="Dans l'obscurité de l'écran, un destin bascule,Clics intempestifs, le sort se module,Chute vertigineuse, déchéance silencieuse,La souris danse, l'âme tombe dans les méandres de l'erreur, Ainsi se brise l'espoir, dans l'abîme des clics hasardeux.";
    document.getElementById("pop").innerHTML ="???????";
    document.getElementById("metier").innerHTML ="    /!\    ";
    imagetitre.src = "trex.png";


   setTimeout(myTimeout2, 4000) ;

  }

}   

function myTimeout2() {


window.location.href = "https://cedricscbjj.github.io/cv2023/cv.html";
}