# 2048
Just change the origin code to CommonJS version and publish it to npm to make it easy to use.

## Demo
https://ppq1991.github.io/2048/

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
|property|type|desc|required|default|
|---|---|---|---|---|
|gameContainer|HTMLElement|the game container|√||
|size|number|size of the grid|X|4|
|startTiles|number|number of tiles in the game beginning|X|2|
|endScore|number|the score to win the game|X|2048|
|title|string|title|X|2048|
|desc|string|brief intro|X|Join the numbers and get to the 2048 tile!|
|playerWinMessage|string|alert message content when game won|X|You Win!|
|playerLoseMessage|string|alert message content when game over|X|Game Over!|
|newGameButtonText|string|button text|X|New Game|
|initValue|number|init value of the first tile|X|2|
|nextValue|function|call this function to get next value|X|v => v * 2|


### Screenshot

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1175750/8614312/280e5dc2-26f1-11e5-9f1f-5891c3ca8b26.png" alt="Screenshot"/>
</p>


## License
2048 is licensed under the [MIT license.](https://github.com/gabrielecirulli/2048/blob/master/LICENSE.txt)
