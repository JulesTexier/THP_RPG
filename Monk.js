class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status = "playing") {
    super(hp, dmg, mana, status)
    this.name = name;
  };

  specialAttack = (victim) => {
    if (this.mana <= 0){
      alert("Dommage, plus de Mana dispo, tu viens de perdre un coup , baaad :(");
    } else {
      console.log ("🧙" + this.name + "utilise sont attaque spéciale 💥💥. Il n'inflige rien à " + victim.name + " mais augmente ses points de vie 8 points." );
      this.hp += 8;
      this.mana -= 25;
    }
  };
};