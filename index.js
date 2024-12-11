require('dotenv').config(); // Load .env variables
const express = require('express');
const dbConnect = require('./config/db_connect');
const { userRoutes } = require('./routes/appRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

dbConnect();

app.use("/api/users",userRoutes);

app.use("/",(req,res)=>{
    res.send("<h1 style=color:red>Hello User This is MongoDB Server Page.</h1>")
});


app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});