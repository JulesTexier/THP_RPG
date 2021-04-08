class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, status = "playing") {
    super(hp, dmg, mana, status)
    this.name = name;
  };

  specialAttack = (victim) => {
    if (this.mana <= 0){
      alert("Dommage, plus de Mana dispo, tu viens de perdre un coup , baaad :(");
    } else {
      console.log ("🧙 " +this.name + " utilise sont attaque spéciale 💥💥 et inflige à " + victim.name + " 5 points de dommages" );
      victim.hp -= 5;
      this.mana -= 20
    }
  };
};