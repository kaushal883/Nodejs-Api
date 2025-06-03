const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cdac2025')
.then(() => console.log('Connected!'));