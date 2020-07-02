import {app} from './app';
import * as http from 'http';
import * as mongoose from 'mongoose';

const PORT = 8080;
const server = http.createServer(app);

server.listen(PORT);
const MONGO_URI = 'mongodb://127.0.0.1:27017/todo';
server.on('listening', async () => {
    console.info(`Listening on port ${PORT}`);
    mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection.once('open', () => {
        console.info('Connected to Mongo via Mongoose');
    });
    mongoose.connection.on('error', (err) => {
        console.error('Unable to connect to Mongo via Mongoose', err);
    });
});