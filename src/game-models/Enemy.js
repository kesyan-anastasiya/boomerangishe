// Враг.

class Enemy {
  constructor(position) {
    this.generateSkin();
    this.position = position;
  }

  generateSkin() {
    const skins = ['🍹', '🥂', '💍', '🍾', '🎆', '🐉', '👻', '💰'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
    // this.position = Math.floor(Math.random() * this.trackLength)
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
