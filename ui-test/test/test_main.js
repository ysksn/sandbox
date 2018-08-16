'use strict'

const assert = require('assert');
import { Hoge } from '../src/module/hoge.js'

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1,2,3].indexOf(4), -1);
    })
  })
})

describe('Hoge', () => {
  describe('#hello()', () => {
    it('should return 1', () => {
      const h = new Hoge()
      assert.equal(1, h.hello())
    })
  })
})
