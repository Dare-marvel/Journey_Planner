-   Clone the project
-   Install all the required packages in client and server using `npm run i-deps`
-   Add the following variables in server/.env
    -   PORT=5000
    -   MONGO_URI= Your mongodb connection uri
    -   JWT_SECRET= a password
    -   WEATHER_API= openweathermap.org api key
    -   NEWS_API= thenewsapi.com api key
    -   JWT_EXPIRE=2d # 2 days
    -   NODE_ENV=development # Change to "production" when deploying
-   Start the server with `npm run back`
-   Start the client with `npm run front`
