import mongoose from 'mongoose';

mongoose.Promise = global.Promise

const Schema = mongoose.Schema;



const PermissionSchema = new Schema({
  admin: {
    type: Boolean,
    'default': false,
  },

  full: {
    type: Boolean,
    'default': false,
  },


});


const Permission = mongoose.model('Permission', PermissionSchema);

export default Permission;
