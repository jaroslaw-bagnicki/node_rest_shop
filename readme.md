# Simple Node.js shop api with MongoDB

To run development mode use `npm run start:dev`.  

To run only app development mode use `npm run start:dev:app`.  
To run only development database use `npm run start:dev:db`. By default **web gui client** (`mongo-express`) is setup on: <http://localhost:8081>. Note: To start development database You need have installed `docker` and `docker-compose`. 

Production version to need some environment variables:
  - `PORT`
  - `DB_URL`
  - `DB_NAME`
  - `DB_USERNAME`
  - `DB_PASSWORD`

 Environment variables for development mode are setup in **nodemon** config file. By default: 
```
  "env": {
    "PORT": 3000,
    "DB_URL": "mongodb://localhost:27017/",
    "DB_NAME": "shop",
    "DB_USERNAME": "admin",
    "DB_PASSWORD": "pass"
  }
```