import express from 'express';
import bodyParser from 'body-parser';

// import initialDB from './db/utils/initialDB';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// initialDB();