const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/db/dbConnect');
const cors = require('cors');
const userRoutes = require('./route/userRoute/UserRoute');

dotenv.config();
const app = express();

dbConnect();

app.use(express.json());

app.use(cors({
    credentials : true,
}));


app.use('/api/user' , userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT , console.log(`server is running ${PORT}`));