const express=require('express');
const signUp=require('./routes/SignUp');
const login=require('./routes/Login');
const todo=require('./routes/Todo');
const deleteTodo=require('./routes/DeleteTodo');
const updateTodo=require('./routes/UpdateTodo');
const myListClient=require('./routes/MyListClient');
const addMyListClient=require('./routes/AddMyListClient');
const updateMyListClient=require('./routes/UpdateMyListClient');
const changePassword=require('./routes/ChangePassword');
const changeDetails=require('./routes/ChangeDetailes');
const addList=require('./Routes/AddList');
const getList=require('./Routes/GetList');
const updateList=require('./Routes/UpdateList');
const getOneList=require('./Routes/GetOneList');
const deleteList=require('./Routes/DeleteList');
const support=require('./Routes/Support');
const contactUs=require('./Routes/ContactUs');
const users=require('./Routes/Users');
const mongoose=require('mongoose');
const app = express();
mongoose.set('strictQuery', false);
const cors=require('cors');



mongoose.connect('mongodb://127.0.0.1:27017/FinalProject')
.then(()=>console.log('connected to data base'))
.catch(()=>console.log('couldnt connect to data base '));


app.use(express.json()); // conver json to javascript and javascript to json
app.use(cors())



app.use('/api/signUp',signUp)
app.use('/api/login',login)
app.use('/api/todo',todo)
app.use('/api/support',support)
app.use('/api/contactUs',contactUs)
app.use('/api/deleteTodo',deleteTodo)
app.use('/api/updateTodo',updateTodo)
app.use('/api/addList',addList)
app.use('/api/updateList',updateList)
app.use('/api/getList',getList)
app.use('/api/getOneList',getOneList)
app.use('/api/deleteList',deleteList)
app.use('/api/changePassword',changePassword)
app.use('/api/changeDetails',changeDetails)
app.use('/api/myListClient',myListClient)
app.use('/api/addMyListClient',addMyListClient)
app.use('/api/updateMyListClient',updateMyListClient)
app.use('/api/users',users)

  const port = process.env.PORT || 4000; 

app.listen(port, () => console.log(`active on ${port}`))