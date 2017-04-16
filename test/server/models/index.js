import mongoose from 'mongoose';
import connect, { testConfig } from '../../../server/db/connection';



// connection to test mongodb
(!mongoose.connection.db)? connect(testConfig) : console.log('[[connected to mongodb]]');



import './user';
import './post';
