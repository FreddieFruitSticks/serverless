'use strict'
const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB()
const _ = require('lodash')

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: 'TestTable1',
    Key:{
      id:{
        S: event.pathParameters.id,
      }
    }
  }

  dynamo.getItem(params, (error, result) => {
    if (error){
      console.error(error)
      callback(new Error('Couldn\'t fetch the item.'))
    }else{
      if(!_.isEmpty(result.Item)){
        const response = {
          statusCode:200,
          body: JSON.stringify(result.Item)
        }
        callback(null, response)
      }else{
        const response = {
          statusCode:404,
          body: "{\"message\": \"No message with this id\"}"
        }
        callback(null, response)
      }
    }
  })
}
