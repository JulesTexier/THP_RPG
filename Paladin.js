class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status = "playing") {
    super(hp, dmg, mana, status)
    this.name = name;
  };

  specialAttack = (victim) => {
    if (this.mana <= 0){
      alert("Dommage, plus de Mana dispo, tu viens de perdre un coup, baaad :(")
    } else {
      console.log ("🧙 " + this.name + " utilise sont attaque spéciale 💥💥 et inflige à " + victim.name + " 4 points de dommages et récupère 3 points de vie" );
      victim.hp -= 4;
      this.mana -= 40;
      this.hp += 3;
    }
  };
};