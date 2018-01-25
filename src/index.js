/**
 * 2018/1/25
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   乔杨 <peiqiao.ppq@alipay.com>
 */

'use strict'

import GameManager from '../js/game_manager'
import KeyboardInputManager from '../js/keyboard_input_manager'
import HTMLActuator from '../js/html_actuator'
import LocalStorageManager from '../js/local_storage_manager'

class Game {
  constructor (args) {
    console.log('init')
    this.gameManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager)
  }
}

export default Game
