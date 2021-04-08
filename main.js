function launch(){
  alert("Merci d'ouvrir ta console pour commencer")
  if (confirm("La partie va commencer, êtes-tu sûr.sûre? ")) {
    const play = new Game ();
  } else {
    alert("annulation");
  }
};

function restart(){
  if (confirm("Vous souhaitez recommencer une partie ? ")) {
    console.clear();
    new Game ();
  } else {
    alert("annulation");
    var storage = {};
    storage.play = new Class();
    delete storage.instance;
  };
};