class Turn {
  constructor(turnLeft, characters, game) {
    this.turnLeft = turnLeft;
    this.characters = characters;
    this.game = game;
    this.go = this.startTurn();
  }

  startTurn = () => {
    var randomCharacters = this.characters.sort(() => Math.random() - 0.5);
    let names = [];
    this.characters.map(character => {names.push(character.name)});

    for(let index in randomCharacters){
        if (randomCharacters[index].status == "playing") {
          let prenom = ""
          do {
             let playerName = []
              this.characters.map(element => {
                playerName.push(element.name)
              });
              console.log(this.characters)
              prenom = prompt("C'est au tour de " + randomCharacters[index].name + " de jouer, qui souhaites-tu attaquer ? (tu peux aussi ANNULER pour prendre des infos, sur l'etat des joueurs) ");
              if (prenom == null) {
                this.game.watchStats();
                // alert("Dommage d'arrêter maintenant, too baad :) ");
                // return
              };
            } while(!names.includes(prenom) || randomCharacters[index].name == prenom);
          let victim = this.characters.find(character => character.name == prenom);
          
          if(victim.status=="loser"){
            alert("Ce personnage est déjà mort, tu viens de perdre un coup , baaad :(");
          } else if (victim.status=="playing"){
            let attackType = prompt("Très bien " + randomCharacters[index].name + ", avec quelle attaque souhaites-tu attaquer "+ victim.name +" ? 1 - Attaque Normale 2 - Attaque Spéciale");
            if(attackType == "1"){
              randomCharacters[index].dealDamage(victim);
            } else if (attackType == "2") {
              randomCharacters[index].specialAttack(victim);
            }
          };
        };
        this.game.checkWinner();
    }
    this.game.newTurn();
  }
};


