import { test, module } from 'qunit';
import later from 'later';
import EmberObject from '@ember/object';

module('Unit | later exports');

test('later exports', (assert) => {
  assert.ok(later, 'later exports an object');
});

test('later instanceof EmberObject', (assert) => {
  assert.ok(later instanceof EmberObject);
});

test('later parse exists', (assert) => {
  assert.equal(typeof later.parse, 'object');
});

test('later schedule fn exists', (assert) => {
  assert.equal(typeof later.schedule, 'function');
});
