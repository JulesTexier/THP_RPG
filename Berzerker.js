class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status = "playing") {
    super(hp, dmg, mana, status)
    this.name = name;
    this.attack = ""
  };

  specialAttack = (victim) => {
    if (this.mana <= 0){
      alert("Dommage, plus de Mana dispo, tu viens de perdre un coup , baaad :(")
    } else {
      console.log ("🧙 " +this.name + " utilise sont attaque spéciale 💥💥. Il n'inflige rien à " + victim.name + "mais augmente ses futurs points de dommages d'1 points" );
      this.hp -= 1;
      this.dmg += 1;
    }
  };
};