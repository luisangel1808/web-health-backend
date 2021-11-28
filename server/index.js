const express = require('express');
const fileUpload = require('express-fileupload');

const indexRoutes = require('./routes/index.routes');
//const imagesRoutes = require('./routes/images.routes');
const pressuresRoutes = require('./routes/pressures.routes');
const videosRoutes = require('./routes/videos.routes');
const advicesRoutes = require('./routes/pressures.routes');
const usersRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes');

require('./database');
const passport = require('passport');

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
//app.use(imagesRoutes);
app.use(pressuresRoutes);
app.use(advicesRoutes);
app.use(videosRoutes);
app.use(usersRoutes);
app.use(authRoutes);

app.listen(port, () => {
    //console.log(`My port ${port}`);
});