const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const artistRoutes = require('./routes/artists';)
app.use(morgan('combined'));

app.get('/',(request, response) => {
  response.send('Welcome to the record store.');
});
app.use('/artists', artistsRoutes);
app.listen(PORT, () => {
  console.log(`Artists and Songs: listening on port no. ${PORT}...`);
});
