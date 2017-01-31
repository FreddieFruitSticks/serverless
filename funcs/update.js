'use strict'

const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB()

module.exports.update = (event, context, callback) => {
  const data = JSON.parse(event.body)
  const params = {
    TableName: 'TestTable1',
    Key:{
      id:{
        S: event.pathParameters.id
      }
    },
    ExpressionAttributeNames:{
      "#msg_text":"text"
    },
    ExpressionAttributeValues:{
      ":text":{
        S: data.text,
      }
    },
    UpdateExpression: 'SET #msg_text = :text',
    ReturnValues: "ALL_NEW"
  }

  dynamo.updateItem(params, (error, result) => {
    if(error){
      callback(null, new Error("did not update item"))
      console.error(error)
      return;
    }

    const response = {
      statusCode:200,
      body:JSON.stringify(result.Item)
    }
    callback(null, response)
  });
}
