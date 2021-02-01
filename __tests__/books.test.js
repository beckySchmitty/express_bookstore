const request = require("supertest");

const app = require("../app");
const db = require("../db");
const Book = require("../models/book");

describe("Books Routes Test", function () {

  beforeEach(async function () {
    await db.query("DELETE FROM books");

    let data = {
        "isbn": "0691161518",
        "amazon_url": "http://a.co/eobPtX2",
        "author": "Matthew Lane",
        "language": "english",
        "pages": 264,
        "publisher": "Princeton University Press",
        "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
        "year": 2017
      }

    let data2 = {
        "isbn": "0691199999",
        "amazon_url": "http://a.co/eobPtjtj",
        "author": "Another Author",
        "language": "english",
        "pages": 444,
        "publisher": "Princeton University Press",
        "title": "Mathematics in Video Games",
        "year": 2020
      }

    const b1 = await db.query(
        `INSERT INTO books (
              isbn,
              amazon_url,
              author,
              language,
              pages,
              publisher,
              title,
              year) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
           RETURNING isbn,
                     amazon_url,
                     author,
                     language,
                     pages,
                     publisher,
                     title,
                     year`,
        [
          data.isbn,
          data.amazon_url,
          data.author,
          data.language,
          data.pages,
          data.publisher,
          data.title,
          data.year
        ]
      );

      const b2 = await db.query(
        `INSERT INTO books (
              isbn,
              amazon_url,
              author,
              language,
              pages,
              publisher,
              title,
              year) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
           RETURNING isbn,
                     amazon_url,
                     author,
                     language,
                     pages,
                     publisher,
                     title,
                     year`,
        [
          data.isbn,
          data.amazon_url,
          data.author,
          data.language,
          data.pages,
          data.publisher,
          data.title,
          data.year
        ]
      );
  });

/** POST /   bookData => {book: newBook}  */
describe("POST /books/", function () {
    test("can add book with correct data", async function () {
      let book = await request(app)
        .post("/books")
        .send({
            "isbn": "99999999",
            "amazon_url": "http://a.co/eobPtjtj",
            "author": "Test Author",
            "language": "english",
            "pages": 22,
            "publisher": "Princeton University Press",
            "title": "A Really Great Book Title",
            "year": 2001
          });

        expect(response.statusCode).toBe(201);
        expect(response.body.book).toHaveProperty("isbn");    
    });
  });


afterAll(async function() {
    await db.end();
  });