class Character{
  constructor (hp, dmg, mana, status = "playing"){
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  };

  takeDamage = (dmg) =>{
    this.hp -= this.dmg;
  };

  dealDamage(victim){
    victim.hp -= this.dmg;  
    console.log (`🧙  ${this.name} attaque 💥💥 ${victim.name} et lui inflige ${this.dmg} points de dommages. ${victim.name} a 🛡️ ${victim.hp} points de vie`);
    if(victim.hp <= 0){
      console.log(victim.name + " n'a plus de point de vie, il.elle est éliminé.éliminée ⚰️⚰️");
      victim.status = "loser";
    }
  };

};
