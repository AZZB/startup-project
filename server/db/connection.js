import mongoose from 'mongoose';
import run from './seeds';

mongoose.Promise = global.Promise;


function connect(config = {}) {

  //if(mongoose.connection.db) return;

  const options = config.options || {};

  const isDev = (config.uri === devConfig.uri);

  mongoose.connect(config.uri, options, (err) => {
    if(err) return console.log('[[ failed to connect to mongodb!!! ]] ', err);
    console.log('[[ successful connection to mongodb ]]');

  });

  mongoose.connection.on('connected', () => {
    console.log('mongodb connected');
    if(isDev) run();
  });

  mongoose.connection.on('error', (err) => {
    console.error.bind(console, `Mongodb error connection: ${err} `);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  });

}



export const devConfig = {
  uri: 'mongodb://localhost:27017/startup-project-dev',
  options: {},
};


export const testConfig = {
  uri: 'mongodb://localhost:27017/startup-project-test',
  options: {},
};


export const prodConfig = {
  uri: 'here production url for mongodb',
  options: {
    config: { autoIndex: false },
  },
};




export default connect;
