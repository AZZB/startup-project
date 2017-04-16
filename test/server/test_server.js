
import express from 'express';

const app = express(),
      PORT = process.env.PORT || 3000;


require('../../server/index')(app);



app.listen(PORT, (err) => {
  if(err) return console.log(`failed to start server on port ${PORT}`);
  console.log(`server starting on port ${PORT}`);

});


export default app;
