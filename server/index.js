import express from 'express';
import fileUpload from 'express-fileupload';

import indexRoutes from './routes/index.routes';
import imagesRoutes from './routes/images.routes';
import pressuresRoutes from './routes/pressures.routes';
import videosRoutes from './routes/videos.routes';
import advicesRoutes from './routes/pressures.routes';
import usersRoutes from './routes/users.routes';
import authRoutes from './routes/auth.routes'

import './database'
import passport from 'passport';

const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors({
    origin:'*'
}));

require('./utils/auth')

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.set('port', process.env.PORT || 4000); //Si hay una variable de entorno usela, sino use la 4000

app.use(fileUpload({
    tempFileDir: '/temp'
}))

app.use(passport.initialize());

app.use(indexRoutes);
app.use(imagesRoutes);
app.use(pressuresRoutes);
app.use(advicesRoutes);
app.use(videosRoutes);
app.use(usersRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`My port ${port}`);
});