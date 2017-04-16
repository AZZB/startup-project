import supertest from 'supertest';
import chai from 'chai';

const expect = chai.expect;
const should = chai.should();

import app from '../test_server';
import User from '../../../server/models/User';
import * as AuthMessages  from '../../../server/utils/messages/auth';
import { createUserData } from '../models/helpers';
import * as UserQuery from '../../../server/models/query/user';
import * as PermissionQuery from '../../../server/models/query/permission';

describe('Authentication Login', () => {

  let request;

  before((done) => {
    request = supertest(app);
    const user = new User(createUserData());

    (async () => {
      try {
        await User.remove({});
        const permission = await PermissionQuery.save();
        await UserQuery.save(user, permission);
        done();
      } catch (e) {
        done(e);
      }

    })();
  });




  it('return token when send the valid user with username ', (done) => {

    postJSON(request, '/login', {
      username: 'AZZ_B',
      password: '123456',
    })
    .expect('Content-Type', /json/)
    .expect((res) => {
      expect(res.body.token).to.exist;
      expect(res.body.user).to.exist;
      console.log(res.body);
    })
    .expect(200)
    .end(done);

  });



  it('return token when send the valid user with email', (done) => {

    postJSON(request, '/login', {
      username: 'aikidocombat@hotmail.com',
      password: '123456',
    })
    .expect('Content-Type', /json/)
    .expect((res) => {
      expect(res.body.token).to.exist;
      expect(res.body.user).to.exist;
    })
    .expect(200)
    .end(done);

  });



  it('does not authenticate when the user doest exist', (done) => {
    postJSON(request, '/login', {
      username: 'other',
      password: 'other',
    })
    .expect('Content-Type', /json/)
    .expect(400, AuthMessages.userNotFound(), done);

  });


  it('does not authenticate when send the wrong password', (done) => {

    postJSON(request, '/login', {
      username: 'AZZ_B',
      password: 'other',
    })
    .expect('Content-Type', /json/)
    .expect(400, AuthMessages.wrongPassword(), done);

  });


});


// --------------------------------------------------
// --------------------------------------------------


describe('Authentication register', () => {

  let request;

  before((done) => {
    request = supertest(app);
    const user = new User(createUserData());
    (async () => {
      try {
        await User.remove({});
        const permission = await PermissionQuery.save();
        await UserQuery.save(user, permission);
        done();
      } catch (e) {
        done(e);
      }

    })();
  });


  it('register when we send the valide user data', (done) => {
    postJSON(request, '/signup', {
      username: 'GMA',
      email: 'gamer.dz@mail.com',
      password: 'likethegame',
    })
    .expect('Content-Type', /json/)
    .expect(200, AuthMessages.successRegistration(), done);

  });


  it('does not register when the username are already exist ', (done) => {
    let data = createUserData({email: 'other@other.com'});

    postJSON(request, '/signup', data)
    .expect('Content-Type', /json/)
    .expect(400, AuthMessages.fieldAlreadyExist('username'), done);

  });


  it('does not register when the email are already exist', (done) => {
    let data = createUserData({ username: 'other'});

    postJSON(request, '/signup', data)
    .expect('Content-Type', /json/)
    .expect(400, AuthMessages.fieldAlreadyExist('email'), done);

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




// helpers function
const postJSON = function postJSONFun(request, url, body) {
  return  request.post(url)
          .type('form')
          .send(body)
          .set('Accept', 'application/json');
}
