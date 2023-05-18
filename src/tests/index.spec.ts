import request from "supertest";
import app from "../app.js";

describe("Index page", () => {
    it("should return 200 for GET", () => {
        return request(app).get("/").expect(200)
    })

    it("should return 404 for POST", () => {
        return request(app).post("/").expect(404)
    })
})