import { test, module } from 'qunit';
import later from 'later';
import Ember from 'ember';

module('Unit | later exports');

test('later exports', (assert) => {
  assert.ok(later, 'later exports an object');
});

test('later instanceof Ember.Object', (assert) => {
  assert.ok(later instanceof Ember.Object);
});

test('later parse exists', (assert) => {
  assert.equal(typeof later.parse, 'object');
});

test('later schedule fn exists', (assert) => {
  assert.equal(typeof later.schedule, 'function');
});
