import path from 'path';

import express from 'express';

import connect, { devConfig } from './server/db/connection';


// connect to mongodb
connect(devConfig);

const app = express(),
      PORT = process.env.PORT || 3000;



app.use(express.static('dist'));

// common setup server
require('./server/index')(app);


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, (err) => {
  if(err) return console.log(`failed to start server on port ${PORT}`);
  console.log(`server starting on port ${PORT}`);

});
