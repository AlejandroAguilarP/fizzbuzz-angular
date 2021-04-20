# Fizz Buzz FrontEnd

The project needs Node JS and Angular-Cli enviroment.

To build the application, run the next command
```shell
npm install
```

After that, you can run the app in a new browser tab
```shell
ng serve --open
```

The configuration was created to connect to APi, and I use a proxy file, if you need to modify the API Url change the "target" attribute

```shell
{
    "/api": {
        "target": "http://localhost:8080", 
        "secure": false,
        "pathRewrite": {
          "^/api": ""
    },
    "changeOrigin": true,
    "logLevel": "debug"
    }
}
```

The application listens on port `4200`.


