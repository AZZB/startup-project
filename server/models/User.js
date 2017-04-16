import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import Permission from './Permission';

mongoose.Promise = global.Promise


const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: [true, "the username are already exist"],
  },

  password: { type: String, required: true },

  email: {
    type: String,
    required: [true, "Email field is required"],
    index: true,
    unique: true,
  },

  permission: {
    type: Schema.Types.ObjectId,
    ref: 'Permission',
  },

  avatar: String,

  isVerified: { type: Boolean, 'default': false },

  fullName: String,

  createdAt: { type: Date, 'default': Date.now },

  bio: String,

  gender: String,

  lastLogin: Date,

  isAccountActivate: { type: Boolean, 'default': true },

});


// -------------------------- validators ----------------------
userSchema.path('username')
  .validate(
    (v) => (v && v.length > 2 && v.length < 20 ),
    'length username should be great or equal than 3 and less than 20'
  );

userSchema.path('email')
  .validate(
    (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
    'Email has an invalid format'
  );


// --------------------------- password encryption --------------------
const SALT_FACTOR = 10;
const noop = () => {};

userSchema.pre('save', function(done) {
  const user = this;
  if(!user.isModified('password')) return done();

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if(err) return done(err);

    bcrypt.hash(user.password, salt, noop, (err, hashedPassword) => {
      if(err) return done(err);
      user.password = hashedPassword;
      done();
    });

  });

});


//  --------------------------- methods ---------------------
userSchema.methods.name = function() {
  return this.fullName || this.username;
}


userSchema.methods.checkPassword = function(guess) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(guess, this.password, (err, isMatch) => {
      (err)? reject(err) : resolve(isMatch);
    });
  });
}



//-------------------------------------------------


const User =  mongoose.model('User', userSchema);

export default User;
