const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/',(request, response) => {
  response.send('Welcome to the record store.');
});
app.listen(PORT, () => {
  console.log(`Artists and Songs: listening on port no. ${PORT}...`);
});
