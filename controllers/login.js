const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));



app.listen(3000);