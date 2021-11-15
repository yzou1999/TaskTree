const Users = require("../routes/users");
const request = require("supertest");
const express = require("express");
const cors = require("cors");
const expect = require("chai").expect;
const app = require("../test/appTest");
const conn = require("../test/db");
const chaiHttp = require("chai-http");
const chai = require("chai");

chai.use(chaiHttp);

describe("Testing Basic API", () => {
  before((done) => {
    conn
      .connect()
      .then(() => done())
      .catch(done);
    //.catch(done());
  });

  after((done) => {
    conn
      .close()
      .then(() => done())
      .catch(done);
  });

  it("home route works", () => {
    expect("Content-types").to.equal("Content-types");
  });

  it("no users", (done) => {
    chai
      .request(app)
      .get("/")
      .then((res) => {
        expect(res.body.length).to.equal(0);
        done();
      })
      .catch(done);
  });

  it("yes users", (done) => {
    chai
      .request(app)
      .post("/register")
      .send({ email: "123@gmail.com", username: "hey", password: "123123" })
      .then((res) => {
        chai
          .request(app)
          .get("/")
          .then((res) => {
            expect(res.body.length).to.equal(1);
            done();
          })
          .catch(done);
      })
      .catch(done);
  });

  it("testing register endpoints", (done) => {
    chai
      .request(app)
      .post("/register")
      .send({ email: "123@gmail.com", username: "hey", password: "123123" })
      .then((res) => {
        expect(res.body).to.be.a("object");
        done();
      })
      .catch(done);
  });

  it("testing register not filling username errors", (done) => {
    chai
      .request(app)
      .post("/register")
      .send({ email: "123@gmail.com", password: "123123" })
      .then((res) => {
        expect(res.body.username).to.equal("username required");
        done();
      })
      .catch(done);
  });

  it("testing register not filling email errors", (done) => {
    chai
      .request(app)
      .post("/register")
      .send({ username: "jon", password: "123123" })
      .then((res) => {
        expect(res.body.email).to.equal("Email required");
        done();
      })
      .catch(done);
  });

  it("testing register not filling password errors", (done) => {
    chai
      .request(app)
      .post("/register")
      .send({ email: "123@gmail.com", username: "123123" })
      .then((res) => {
        expect(res.body.password).to.equal("password required");
        done();
      })
      .catch(done);
  });

  it("testing register username errors", (done) => {
    chai
      .request(app)
      .post("/register")
      .send({ email: "123123@gmail.com", username: "bye", password: "123123" })
      .then(() => {
        expect(
          chai.request(app).post("/register").send({
            email: "123123123@gmail.com",
            username: "bye",
            password: "123123",
          })
        ).to.throw("E11000 duplicate key error dup key: { : 'bye' }");
      })
      .catch(done());
  });

  it("testing login endpoints", (done) => {
    chai
      .request(app)
      .post("/login")
      .send({ username: "hey", password: "123123" })
      .then((res) => {
        //console.log(res.body);
        expect(res.body).to.be.a("object");
        done();
      })
      .catch(done);
  });

  it("testing login username errors", (done) => {
    chai
      .request(app)
      .post("/login")
      .send({ username: "jojjojjo", password: "123123" })
      .then((res) => {
        console.log(res.body);
        expect(res.body.userNotFound).to.equal("username does not exist");
        done();
      })
      .catch(done);
  });

  it("testing login password errors", (done) => {
    chai
      .request(app)
      .post("/login")
      .send({ username: "hey", password: "123123123" })
      .then((res) => {
        console.log(res.body);
        expect(res.body.passwordIncorrect).to.equal("Password incorrect");
        done();
      })
      .catch(done);
  });

  it("create events", (done) => {
    chai.request(app).post("/api/calendar/create-event");
    done();
  });

  it("get events", (done) => {
    chai
      .request(app)
      .get("/api/calendar/get-events")
      .then((res) => {
        expect(res.body).to.be.an("array");
        done();
      })
      .catch(done);
  });
});
