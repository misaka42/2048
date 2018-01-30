# 2048
Just change the origin code to CommonJS version and publish it to npm to make it easy to use.

## Demo
https://ppq1991.github.io/2048/

## Usage
##### import
```bash
npm i -S game-2048
```

##### html
```html
<div id="container"></div>
```

##### javascript
```js
import 'game-2048/style/main.css';
import Game from 'game-2048';
const game = new Game({
  gameContainer: document.getElementById('container')
}); 
```

## Config
##### constructor
|property|type|desc|required|default|
|---|---|---|---|---|
|gameContainer|HTMLElement|the game container|√|undefined|
|startTiles|number|number of tiles in the game beginning|X|2|
|endScore|number|the score to win the game|X|2048|
|keepPlaying|boolean|show keep playing button after player reach the end score|X|false|
|title|string|title|X|2048|
|desc|string|brief intro|X|Join the numbers and get to the 2048 tile!|
|playerWinMessage|string|alert message content when game won|X|You Win!|
|playerLoseMessage|string|alert message content when game over|X|Game Over!|
|retryButtonText|string|retry button text|X|Try Again|
|keepPlayingButtonText|string|keep playing button text|X|Keep Going!|
|newGameButtonText|string|button text|X|New Game|
|initValue|number|init value of the first tile|X|2|
|getNextValue|function|call this function to get next value|X|v => v * 2|
|getClassNameByValue|function|call this function to get classname|X|v => `tile-${v}`|
|onGameStart|function|on game start hook|X|undefined|
|onGameOver|function|onGameOver(score, isWin)|X|undefined|

##### methods


### Screenshot

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1175750/8614312/280e5dc2-26f1-11e5-9f1f-5891c3ca8b26.png" alt="Screenshot"/>
</p>


## License
2048 is licensed under the [MIT license.](https://github.com/gabrielecirulli/2048/blob/master/LICENSE.txt)
