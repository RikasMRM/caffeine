# caffeine Social Media Application
![My Image](surgedev2.jpg)
![My Image](surgedev.jpg)

This application contains 2 main repos, front end and backend in 2 seperate folders names "client" and "server"

## Manual Installation

Navigate into client((Frontend)) folder to install dependancies

```bash
  cd ./client
  npm install
```

Navigate into server((Backend)) folder to install dependancies

```bash
  cd ../server
  npm install
```

## Manual Running the appllication

Open 2 terminal tabs in the both client and server folder

inside the server((Backend)) folder, run;

```bash
npm start
```

inside the client((Frontend)) folder, run;

```bash
npm start
```

## Deployment

### Running the application using docker-compose
navigate to the root folder of the application

Run;

```
docker-compose up
```

## Environment variables 

```bash
MONGO_URL=''
PORT=
JWT_SECRET=""
```

# data model
![My Image](datamodel.jpg)