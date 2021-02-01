CREATE TABLE books (
  isbn TEXT PRIMARY KEY,
  amazon_url TEXT,
  author TEXT,
  language TEXT, 
  pages INTEGER,
  publisher TEXT,
  title TEXT, 
  year INTEGER
);

INSERT INTO books
VALUES ('0691161518', 'http://a.co/eobPtX2', 'first name', 'english', '120', 'Princeton University Press', 'random title', '2019');
INSERT INTO books
VALUES ('063391161518', 'http://a.co/eobPrrr2', 'another name', 'english', '260', 'Princeton University Press', 'book title', '2018');
INSERT INTO books
VALUES ('069116331518', 'http://a.co/eobPtX2', 'second name', 'english', '320', 'Princeton University Press', 'title title', '2019');