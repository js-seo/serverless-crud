'use strict';

const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports = (event, respond) => {
  const params = {
    TableName: 'post',
  }

  return dynamoDb.scan(params).promise()
    .then((data) => {
      respond(200, data.Items)
    }).catch((err) => {
      console.error(err)
      respond(500, 'Error!')
    })
}
