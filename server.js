'use strict';

const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);

const api = require(`./routes/api.js`);
const view = require(`./routes/view.js`);


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

app.use(api);
app.use(view);

mongoose.connect(process.env.MONGODB_URI ||`mongodb://localhost/workout`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
