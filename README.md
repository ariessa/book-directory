# Book Directory

> Build a book directory, where you would need to create endpoints. Retrive all books or only one book by id. You can add a new book to the list. Only registered users can add books. Use any database or data collected as a JSON file.


<br/>

## How to Run It

1. Clone repo.

```
git clone https://github.com/ariessa/book-directory.git
```

3. In a terminal, run the json-server.
```
npm run server
```

4. In another terminal, run the web app.
```
npm run start
```

<br/>

## What Can It Do

- Display simple front end on `localhost:3000`.
- Get all books using `localhost:3001/books` and front end.
- Get books by id using `localhost:3001/books/$id`.
- Add new book using POST request and front end. (Everyone can add new book entry, does not restrict to registered users only 😢)
- Search for book by titles using front end.
- Update book's author using UPDATE request via API endpoint and front end.
- Delete book entry (title, author & id) using DELETE request via API endpoint and front end.
- Register user & save it to Firebase Realtime Database.
