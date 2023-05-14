import request from 'supertest';
import { app } from "../app";

describe("Bad requests", () => {
    it("should return status 404 for non-existance endpoints/files", () => {
        return request(app).get("/non-existance-page-404").expect(404);
    })
})
