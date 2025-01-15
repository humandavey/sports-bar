# sports-bar

Sports Bar is an open source (MIT License), website for tracking scores, updates, chatter, and news about your favorite leagues!

For all questions, comments, or concerns, reach out to [Davey Adams \<davey.adams.three@gmail.com\>](https://github.com/humandavey).

## Code

sports-bar is written in TypeScript.
The frontend uses ReactJS and the backend uses Express.
Firestore is used as the database.

### Server

The server code is at root level in `./src`.

To compile and run the server, use `npm run full`.

To run the already compiled server, use `npm run serve`.

If you want to build the server and not run it, use `npm run build`.

### Client

The client code is in the `./client` directory at `./client/src`.

To run the development version of the frontent, use `npm run start`.

To build the production frontend, use `npm run build`.

## Configuration

Add a `.env` file in the root directory with the following API keys.

```
FB_API_KEY=???
FB_AUTH_DOMAIN=???
FB_PROJECT_ID=???
FB_STORAGE_BUCKET=???
FB_MESSAGING_SENDER_ID=???
FB_APP_ID=???
FB_MEASUREMENT_ID=???
```