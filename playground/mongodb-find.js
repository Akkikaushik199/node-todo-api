//C:\Users\Akshit Ruchika\Desktop\node-todo-api
// mongod.exe --dbpath C:\data\db
const {MongoClient, ObjectID}= require('mongodb');

var obj= new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db= client.db('TodoApp')

  // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Todos2').find({name:'Akshit Kaushik'}).toArray().then((docs)=>{
    console.log(`Todos2`);
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });

  // client.close()
});
