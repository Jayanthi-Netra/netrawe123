const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-west-2'});
let rekognition = new AWS.Rekognition();
exports.handler = (event, context, callback) => { 
           var collectionEmployee = (event.company+"Employee").toUpperCase();
           var collectionAnonymous = (event.company+"Anonymous").toUpperCase();
           var paramsdate1 = {
           Item :{
           user_email:event.user_email,
           user_pwd:event.password,
           user_role: event.role,
           company:event.company,
           collectionEmployee:collectionEmployee,
           collectionAnonymous:collectionAnonymous
           },
           TableName : 'login_data'
        };
           docClient.put(paramsdate1, function(err,data)
       {
           if(err)
           { 
               callback(err,null);
           }else
           {
            var params = {
         CollectionId: collectionEmployee
           };
   // rekognition.listFaces(params, function(err, data) {
   rekognition.createCollection(params, function(err, data) {
  // rekognition.deleteCollection(params, function(err, data) {
    if (err)
    console.log(err, null); // an error occurred
    else {   
    
            var params = {
         CollectionId: collectionEmployee
           };
   // rekognition.listFaces(params, function(err, data) {
   rekognition.createCollection(params, function(err, data) {
  // rekognition.deleteCollection(params, function(err, data) {
    if (err)
    console.log(err, null); // an error occurred
    else    
     var obj = new Object();
     obj.status='success'; 
     callback(null,obj);
 });
            

           
    }
 });
            

           }
       });
};
         