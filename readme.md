# Simple Node.js shop api with MongoDB

To run development mode use `npm run start:dev`.  
Note: To run development database You need have installed `docker` and `docer compose`.

Production version to need some environment variables:
  - `PORT`
  - `DB_URL`
  - `DB_NAME`
  - `DB_USERNAME`
  - `DB_PASSWORD`

Environment variables are setup in nodemon config file. By default: 
```
  "env": {
    "PORT": 3000,
    "DB_URL": "mongodb://localhost:27017/",
    "DB_NAME": "shop",
    "DB_USERNAME": "admin",
    "DB_PASSWORD": "pass"
  }
```