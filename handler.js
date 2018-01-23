'use strict';

const lambda = (func) => (event, context, callback) => {
  const respond = (code, result) => {
    const response = {
      statusCode: code,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    }
    return callback(null, response)
  }
  return func(event, respond)
}

const postCreate = require('./post-create')
const postGet = require('./post-get')
const postUpdate = require('./post-update')
const postDelete = require('./post-delete')
const postList = require('./post-list')

module.exports.create = lambda(postCreate)
module.exports.get = lambda(postGet)
module.exports.update = lambda(postUpdate)
module.exports.delete = lambda(postDelete)
module.exports.list = lambda(postList)
