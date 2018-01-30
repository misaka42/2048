/**
 * 2018/1/25
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   乔杨 <peiqiao.ppq@alipay.com>
 */

'use strict'

import '../js/animframe_polyfill'

import GameManager from '../js/game_manager'
import { createElement } from './tool'

/**
 * default game config
 * @type {GameConfig}
 */
const DEFAULT_GAME_CONFIG = {
  size: 4,
  startTiles: 2,
  initValue: 2,
  endScore: 2048,
  keepPlaying: false,
  playerWinMessage: 'You Win!',
  playerLoseMessage: 'Game Over!',
  newGameButtonText: 'New Game',
  retryButtonText: 'Try Again',
  keepPlayingButtonText: 'Keep Going!',
  title: '2048',
  desc: 'Join the numbers and get to the 2048 tile!',
  getNextValue: v => v * 2,
  getClassNameByValue: v => `tile-${v}`
}

class Game {
  /**
   * @typedef {Object} GameConfig
   * @property {number} size - size of the grid
   * @property {Element} gameContainer - the main container of the game
   * @property {?number} startTiles - numbers of tiles in the beginning
   * @property {?number} initValue - value of the first tile
   * @property {?number} endScore - number of the score to end the game
   * @property {?boolean} keepPlaying
   * @property {?string} title
   * @property {?string} desc
   * @property {?string} playerWinMessage
   * @property {?string} playerLoseMessage
   * @property {?string} retryButtonText
   * @property {?string} keepPlayingButtonText
   * @property {?Element} gameMessageContainer
   * @property {?Element} tileContainer
   * @property {?Element} retryButton
   * @property {?Element} keepPlayingButton
   * @property {?Element} scoreContainer
   * @property {?Element} bestContainer
   * @property {?function} getNextValue - return next value by previous
   * @property {?function} getClassNameByValue
   * @property {?function} onGameStart
   * @property {?function} onGameOver - onGameOver(score, isWin)
   */

  /**
   * Game Manager Class
   * @param {GameConfig} config
   */
  constructor (config) {
    this.config = Object.assign({}, DEFAULT_GAME_CONFIG, config)
    this.initDOM()
    this.gameManager = new GameManager(this.config)
  }

  /**
   * init default DOM element
   * @return {Object}
   */
  initDOM () {
    const config = this.config
    config.scoreContainer = config.scoreContainer || createElement('div', { className: 'score-container', innerText: '0' })
    config.bestContainer = config.bestContainer || createElement('div', { className: 'best-container', innerText: '0' })
    config.retryButton = config.retryButton || createElement('a', { className: 'retry-button', innerText: config.retryButtonText })
    config.keepPlayingButton = config.keepPlayingButton || createElement('a', { className: 'keep-playing-button', innerText: config.keepPlayingButtonText })
    config.keepPlayingButton.style.display = config.keepPlaying ? null : 'none'
    config.gameMessageContainer = config.gameMessageContainer || createElement('div', { className: 'game-message' }, [
      createElement('p'),
      createElement('div', { className: 'lower' }, [
        config.keepPlayingButton,
        config.retryButton
      ])
    ])
    config.tileContainer = config.tileContainer || createElement('div', { className: 'tile-container' })
    config.gridContainer = createElement('div', { className: 'grid-container' }, Array.apply(null, Array(config.size)).map(() => createElement('div', { className: 'grid-row' }, Array.apply(null, Array(config.size)).map(() => createElement('div', { className: 'grid-cell' })))))
    if (!config.gameContainer || !(config.gameContainer instanceof window.HTMLElement)) {
      throw new TypeError('gameContainer should be an HTMLElement! did you forget to pass an element to the Game constructor?')
    }
    config.gameContainer.appendChild(createElement('div', { className: 'heading' }, [
      createElement('h1', { className: 'title', innerText: config.title }),
      createElement('div', { className: 'scores-container' }, [
        config.scoreContainer,
        config.bestContainer
      ])
    ]))
    config.gameContainer.appendChild(createElement('div', { className: 'above-game' }, [
      createElement('div', { className: 'game-intro', innerText: config.desc }),
      createElement('div', { className: 'restart-button', innerText: config.newGameButtonText })
    ]))
    config.gameContainer.appendChild(createElement('div', { className: 'game-container' }, [
      config.gameMessageContainer,
      config.gridContainer,
      config.tileContainer
    ]))
  }
}

export default Game
