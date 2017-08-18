'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB();

exports.create = (event, context, callback) => {
  console.log("-------------", event);
  const params = {
    TableName: "TestTable1",
    Item:{
      id: {
        S: uuid.v1()
      },
      text:{
        S: JSON.stringify(event)
      }
    },
  }

  dynamo.putItem(params, (error, result) =>{
    if (error) {
      console.log("!!!! ",error);
      callback(new Error('Couldn\'t create the item.'));
    }else{
      const response = {
        statusCode: 200
        //body: JSON.stringify(result.Item),
      };
      callback(null, response)
    }
  });
};
