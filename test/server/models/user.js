'use strict';

import mongoose from 'mongoose';
import chai from 'chai';
const expect = chai.expect;
const should = chai.should();

import User from '../../../server/models/User';
import * as UserQuery from '../../../server/models/query/user';
import { createUserData } from './helpers';



describe('User models', () => {

  beforeEach((done) => {
    (async () => {

      try {
        await User.remove({});
        done();
      } catch (e) {
          done(e);
      }

    })();
  });




  it('should save User', (done) => {
    const user = new User(createUserData());

    UserQuery
      .save(user)
      .then(
        () => done(),
        (err) => done(err)
      );
  });



  it('should the username be exist', (done) => {
    const { username, ...userData } = createUserData();
    //let userData = createUserData();
    //delete userData.username;
    const user = new User(userData);

    user.validate((err) => {
      expect(err.errors.username).to.exist;
      done();
    });

  });



  it('should the email be exist', (done) => {
    const { email, ...userData } = createUserData();
    //let userData = createUserData();
    //delete userData.email;
    const user = new User(userData);

    user.validate((err) => {
      expect(err.errors.email).to.exist;
      done();
    });

  });



  it('should email has valid format', (done) => {
    let userData = createUserData( {email: 'fdfjfd.dfdf'});
    const user = new User(userData);

    user.validate((err) => {
      expect(err.errors.email).to.exist;
      done();
    });

  });



  it('should the username be unique', (done) => {
    const user = new User(createUserData());
    const secondUser = new User(createUserData());

    (async () => {
      try {
        await UserQuery.save(user);
        await UserQuery.save(secondUser);

        done(new Error('Error! should not save when the username exist'));
      } catch (e) {
        done();
      }

    })();

  });



  it('should the email be unique', (done) => {
    const secondUserData = createUserData({ username: 'GMA' });
    const user = new User(createUserData());
    const secondUser = new User(secondUserData);

    (async () => {
      try {
        await UserQuery.save(user);
        await UserQuery.save(secondUser);

        done(new Error('Error! should not save when the email exist'));
      } catch (e) {
        done();
      }
    })();

  });




  it('should the username has length > 2', (done) => {
      const userDataWithLessLengthUsername = createUserData({ username: 'aa'});

      const user = new User(userDataWithLessLengthUsername);

      user.validate((err) => {
        expect(err.errors.username).to.exist;
        done();
      });

  });



  it('should the password be hashed ', (done) => {
    const userData = createUserData();
    const user = new User(userData);

    (async () => {
      try {
        const savedUser = await UserQuery.save(user);
        expect(savedUser.password).to.not.equal(userData.password);

        done();
      } catch (e) {
        done(e);
      }

    })();

  });



  after((done) => {
    (async () => {
      try {
        await User.remove({});
        done();
      } catch (e) {
        done(e);
      }
    })();
  });

});
