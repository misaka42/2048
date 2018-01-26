/**
 * 2018/1/26
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   乔杨 <peiqiao.ppq@alipay.com>
 */

'use strict'

/**
 * create Element
 * @param {string} tagName
 * @param {?Object} attr
 * @param {?Array<Element>} children
 * @return {Element}
 */
export function createElement (tagName, attr, children) {
  const node = document.createElement(tagName)
  Object.assign(node, attr);
  (children || []).forEach(child => {
    node.appendChild(child)
  })
  return node
}
