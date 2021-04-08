class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status = "playing") {
    super(hp, dmg, mana, status)
    this.name = name;
  };

  specialAttack = (victim) => {
    if (this.mana <= 0){
      alert("Dommage, plus de Mana dispo, tu viens de perdre un coup, baaad :(")
    } else {
      console.log ("🧙 " + this.name + " utilise sont attaque spéciale 💥💥 et inflige à " + victim.name + " 7 points de dommages. Il augmente ses points de vie de 3 points" );
      victim.hp -= 7;
      this.mana -= 20;
      this.hp += 3;
    }
  };
};