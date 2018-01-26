# 2048

## Usage
##### import
```bash
npm i -S game-2048
```

##### javascript
```js
import Game from 'game-2048';
const game = new Game({
  gameContainer: document.getElementById('container')
}); 
```

##### html
```html
<div id="container"></div>
```

## Config
```js
  /**
   * @typedef {Object} GameConfig
   * @property {number} size - size of the grid
   * @property {Element} gameContainer - the main container of the game
   * @property {?number} startTiles - numbers of tiles in the beginning
   * @property {?number} endScore - number of the score to end the game
   * @property {?string} title
   * @property {?string} desc
   * @property {?string} gameWinMessage
   * @property {?string} gameLoseMessage
   * @property {?string} playerWinMessage
   * @property {?string} playerLoseMessage
   * @property {?Element} gameMessageContainer
   * @property {?Element} tileContainer
   * @property {?Element} retryButton
   * @property {?Element} keepPlayingButton
   * @property {?Element} scoreContainer
   * @property {?Element} bestContainer
   */
```

### Screenshot

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1175750/8614312/280e5dc2-26f1-11e5-9f1f-5891c3ca8b26.png" alt="Screenshot"/>
</p>

That screenshot is fake, by the way. I never reached 2048 :smile:

## License
2048 is licensed under the [MIT license.](https://github.com/gabrielecirulli/2048/blob/master/LICENSE.txt)
