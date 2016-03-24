import Ember from 'ember';

let Later = Ember.Object.extend(later, {});

let emberLater = function (...args) {
  return Later.create(...args);
};

//
// for (let laterProp in later) {
//   if (later.hasOwnProperty(laterProp)) {
//     emberLater[laterProp] = later[laterProp];
//   }
// }

// Later.reopen({
//   clone() {
//     return emberLater(tis);
//   }
// });

export default emberLater();
