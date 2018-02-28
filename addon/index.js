import EmberObject from '@ember/object';

let Later = EmberObject.extend(later, {});

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
