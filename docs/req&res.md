# Request and Response in Express

Request and Response object both are the callback function parameters and are used for Express.js and Node.js. 
You can get the request query, params, body, headers, and cookies. 
It can overwrite any value or anything there. 
However, overwriting headers or cookies will not affect the output back to the browser.

## Request Object

The request object contains all the data sent from the user browser to the express server.

| Number    | Properties    |  Description  |
|-----------|---------------|---------------|
| 1         | req.app       | Used to hold a reference to the instance of the express application. |
| 2         |    req.body   |   Contains key-value pairs of data submitted in the request body. By default, it is undefined and is populated when you use body-parsing middleware such as body-parser. |
| 3         | req.cookies   |   This property contains cookies sent by the request, used for the cookie-parser middleware. |
| 4         | req.ip        |    	req.ip is remote IP address of the request. |
| 5         | req.path      |    req.path contains the path part of the request URL. |
| 6         | req.route     |    req.route is  currently-matched route. |
    
## Response Object

The response object specifies the HTTP response when an Express app gets an HTTP request. The response is sent back to the client browser and allows you to set new cookies value that will write to the client browser.

| Number    | Properties    |  Description  |
|-----------|---------------|---------------|
| 1         | res.app       | 	res.app is hold a reference to the instance of the express application that is using the middleware. |
| 2         | 	res.locals  | Specify an object that contains response local variables scoped to the request. |

