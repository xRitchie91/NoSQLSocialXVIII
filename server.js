// depend on these guys
const express = require('express');
const mongoose = require('mongoose');

const app = express();
// serverrrrrrr
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// mongooooooooooo 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/NoSQLSocialXVIII', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));