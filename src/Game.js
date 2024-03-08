// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength } = {}) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang()
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(trackLength - 1);
    this.view = new View();
    this.track = [];
    this.track1 = [];
    this.track2 = [];
    this.track3 = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track1 = (new Array(this.trackLength)).fill(' ');
    this.track2 = (new Array(this.trackLength)).fill(' ');
    this.track3 = (new Array(this.trackLength)).fill(' ');
     const tracks = [this.track1, this.track2, this.track3]
    this.track = tracks[Math.floor(Math.random() * tracks.length)];
    this.track2[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track2[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    if (this.hero.position >= this.enemy.position) {
      this.hero.die();
    } else if (this.boomerang.position >= this.enemy.position) {
      this.enemy.die();
    } else if (this.boomerang.position <= this.enemy.position) {
      this.boomerang.moveRight();
    } else if (this.boomerang.position >= this.hero.position) {
      this.boomerang.moveLeft();
    } else if (this.boomerang.position <= this.hero.position) {
      console.log("За деньги да");
      process.exit();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      runInteractiveConsole;
      this.check();
      this.regenerateTrack();
      this.view.render(this.track1, this.track2, this.track3);
      this.enemy.moveLeft();
    }, 200);
  }
}

module.exports = Game;
