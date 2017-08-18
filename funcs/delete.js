'use strict';
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB();

exports.delete = (event, context, callback) => {
  const params = {
    TableName: 'TestTable1',
    Key:{
      id:{
        S:event.pathParameters.id
      }
    }
  };

  dynamo.deleteItem(params, (error, result) =>{
    if(error){
      console.log(error);
      callback(new Error("could not delete item"))
    }else{
      const response = {
        statusCode:200,
        body: "{\"message\":\"item deleted\"}"
      };
      callback(null, response)
    }
  });
};
