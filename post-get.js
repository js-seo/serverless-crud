'use strict';

const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports = (event, respond) => {
  const params = {
    TableName: 'post',
    Key: {
      id: event.pathParameters.id
    }
  }

  return dynamoDb.get(params).promise()
    .then((data) => {
      respond(200, data.Item)
    }).catch((err) => {
      console.error(err)
      respond(500, 'Error!')
    })
}
