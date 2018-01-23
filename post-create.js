'use strict';

const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const shortid = require('shortid')

module.exports = (event, respond) => {
  const data = JSON.parse(event.body);

  data.id = shortid.generate()
  data.updatedAt = new Date().getTime()

  const params = {
    TableName: 'post',
    Item: data
  }

  return dynamoDb.put(params).promise()
    .then((data) => {
      respond(200, params.Item)
    }).catch((err) => {
      console.error(err)
      respond(500, 'Error!')
    })
}
