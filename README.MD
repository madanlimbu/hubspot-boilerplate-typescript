# Hubspot boilerplate typescript

Simple lightweight boilerplate for hubspot projects with typescript & config for both cms theme & serverless functions.

## Getting Started

If you already have a site setup locally then you can copy some of configs from webpack.

If you are setting of the project you can follow the hubspot guide here. https://developers.hubspot.com/docs/cms/guides/getting-started

```
    yarn
    hs init
```

We are using nodemon during development.

Project Summary : 

    src 
        - js (contains frontend react components)
        - scss (global scss)
    utils  (backend experss server utils)
    index.js (express stuff)
         
### Prerequisites

- node

### Installing

Instal modules and run express server with nodemon
```
cd proxy-api
npm install
npm run server
```

Run webpack watch on new Terminal for frontend compilation

``
npm run watch
``

## Running the tests

Get the local server started then find a CORS blocking endpoint. On the browser got to [http://localhost:900/get?q=some_cors_blocked_endpoint]().

We should be able to get the data in browser. Then on your project in JS call this endpoint to get the data.
 
## Built with

- node
- express
- request

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/madan95/dockerTemple/tags).

## Author

- Madan Limbu