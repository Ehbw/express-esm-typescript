import request from "supertest";
import app from "../app.js";

describe("Example test", () => {
    test("should return 200 for GET", async () => {
        return await request(app).get("/").expect(200)
    })
})