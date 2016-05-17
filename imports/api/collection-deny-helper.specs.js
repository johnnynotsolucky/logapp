import { assert } from 'chai';

const assertion = (error, result, callback) => {
  assert.equal(result, false);
  assert.equal(!!error, true);
  assert.equal(error.error, 403);
  if (!!callback) {
    callback();
  }
};

const denyInsert = (collection, fields, done) => {
  collection.insert(fields, (error, result) => {
    assertion(error, result, done);
  });
};

const denyUpdate = (collection, id, fields, done) => {
  collection.update(id, { $set: fields }, (error, result) => {
    assertion(error, result, done);
  });
};

const denyRemove = (collection, id, done) => {
  collection.remove(id, (error, result) => {
    assertion(error, result, done);
  });
};

export { denyInsert, denyUpdate, denyRemove };
