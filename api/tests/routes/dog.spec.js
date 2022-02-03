/* eslint-disable import/no-extraneous-dependencies */

const session = require('supertest-session');
const  request = require('supertest');
const app = require('../../src/app.js');
const { Dogs, conn } = require('../../src/db.js');
const { expect } = require('chai');

const agent = session(app);
const dog = {
  name: 'Pug',
  weight: '1-2',
  height:'1-2'
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dogs.sync({ force: true })
    .then(() => Dogs.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () => agent.get('/dogs').expect(200));
    it ('q', ()=>agent.get ('/dogs?name=iiii').expect (400))
    it ('qq',() =>
    agent.get ('/dogs?name=iiii').then ((res)=>{
      expect(res.body).toEqual ('')
    })
    )
    
    /* it ('shoul get 404',async ()=>{
    const res=await request(app) .get ('/dogs?name=chanda');
      expect(res.statusCode).toBe(200)
      .expect(res.text).toBe('henry')
    }) */ 
  });

});
