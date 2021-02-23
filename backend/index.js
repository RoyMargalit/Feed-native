require('./models/Feed')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feedRoutes')
const app = express();

app.use(bodyParser.json());
app.use(feedRoutes);

const mongoUri = 'mongodb+srv://roymargalit:mypassword@cluster0.hqtni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
if (!mongoUri) {
    throw new Error(
        `MongoURI was not supplied. Make sure you watch the video on setting up Mongo DB!`
    );
}
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('CONNECTED to mongo instance');
});
mongoose.connection.on('error', err => {
    console.error('Error connecting to mongo', err);
});

app.listen(3004, () => {
    console.log('Listening on port 3004');
});