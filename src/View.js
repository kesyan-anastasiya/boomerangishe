// Сделаем отдельный класс для отображения игры в консоли.
//const Game = require('./src/Game');

class View {
  constructor(game) {
    this.game = game;
  }
  render(track1, track2, track3) {
    const yourTeamName = 'Белоснежка и 2 гнома';

    // Тут всё рисуем.
    // console.log(this.track)
    console.clear();
    console.log(track1.join(''));
    console.log(track2.join(''));
    console.log(track3.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
