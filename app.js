const express = require('express');
const path = require('path');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const xss = require('xss-clean');
const mongoSanitizer = require('express-mongo-sanitize');

const AppError = require('./utils/appError');

const app = express();

// const __dirname = path.resolve();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')));

app.use(helmet());

const limiter = rateLimit({
    max: 100,
    windows: 60 * 60 * 1000,
    message: "Too many requests from this IP. Please try again later"
});

app.use('/api', limiter);
app.use(express.urlencoded({extended: true, limit: '10kb'}));
app.use(cookieParser());
app.use(xss());
app.use(mongoSanitizer());
app.use(compression());

app.use('/',(req,res,next) => {
    res.send('welcome world');
})

app.all('*', (req,res,next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
})

module.exports = app;