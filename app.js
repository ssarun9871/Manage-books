const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const bookRouter = require('./routes/book_routes');
const PORT = process.env.PORT;
const URI = process.env.URI


app.use(cors()); 
app.use(bodyParser.json());
app.use('/books',bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to BrewApps LLC (backend challenge)');
});


mongoose.connect(URI)
  .then(result => {
    app.listen(PORT);
    console.log(`Server is running on port ${PORT}`);
  })
  .catch(err => {
    console.error(err);
  });

