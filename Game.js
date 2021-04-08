
class Game {
  constructor(turnLeft = 11) {
      this.turnLeft = turnLeft;
      this.characters = [new Fighter("Grace"), new Paladin("Ulder"), new Monk("Moana"), new Berzerker("Draven"), new Assassin("Carl")];
      this.go = this.newTurn();
  };

  newTurn = () => {
    this.turnLeft -= 1;
    console.log(`//////////////////// Manche n°${this.turnLeft}//////////////////////`);
    new Turn(this.turnLeft, this.characters, this);
  };

  watchStats =() => {
    console.log("Voici l'état des joueurs : "); 
    for (let index in this.characters){
      console.log(this.characters[index].name + ": 🛡️" + this.characters[index].hp + " point(s) de vie, " + this.characters[index].mana + " mana(s), statut : " + this.characters[index].status )
    };
  };

  checkWinner =() => {
    var playing = [];
    for(let i in this.characters){
      if (this.characters[i].status == "playing") {
        playing.push(this.characters[i]);
        };
    };
    if (playing.length == 1) {
      alert("Good News, Il y a un gagnant 🏆🏆🏆🏆🏆, c'est : ... " + playing[0].name + "!!! Merci d'avoir participé");
      playing[0].statut = "Winner"
      restart();

    } else if (this.turnLeft == 1 && playing.length > 1) {
      let winner = [];
      for(let i in playing){
        winner.push(playing[i].name)
        playing[i].statut = "Winner"
      } 
      let classement = playing.sort((a,b) => b.hp-a.hp);
      console.log(classement)
      alert("Good News, Il y plusieurs survivants mais...., celui qui a le plus de point de vie 🏆🏆🏆🏆🏆 est : " + playing[0].name + ".")
      restart();
    };
  };
};



