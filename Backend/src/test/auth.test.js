const request = require("supertest");
const app = require("../app");

describe("Auth API", () => {

  test("Register User", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Rahul",
        email: "rahul@test.com",
        password: "123456"
      });

    expect([200,201]).toContain(res.statusCode);
  });

  test("Login User", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "rahul@test.com",
        password: "123456"
      });

    expect([200,201]).toContain(res.statusCode);
  });

});