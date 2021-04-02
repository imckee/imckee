These are all common responses to a client:

res.end();
res.send();
res.json();
res.render();
res.redirect();

What do the above methods do specifically?

What one function do they ALL have in common?

Please put your answers here:

According to the website https://www.geeksforgeeks.org/express-js-res-end-function/, the res.end() function “is used to end the response process. This method actually comes from the Node core, specifically the response.end() method of HTTP.ServerResponse. Use to quickly end the response without any data.”

The res.send() function basically sends the HTTP response. The body parameter can be a String or a Buffer object or an object or an Array (https://www.geeksforgeeks.org/express-js-res-send-function/).  

The res.json() function sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method (https://www.geeksforgeeks.org/express-js-res-json-function/).  

The res.render() function is used to render a view and sends the rendered HTML string to the client (https://www.geeksforgeeks.org/express-js-res-render-function/#:~:text=The%20res.,HTML%20string%20to%20the%20client.&text=Parameters%3A%20This%20function%20accept%20two,local%20variables%20for%20the%20view.).  

The res.redirect() function redirects to the URL derived from the specified path, with specified status, a integer (positive) which corresponds to an HTTP status code. The default status is “302 Found” (https://www.geeksforgeeks.org/express-js-res-redirect-function/#:~:text=The%20res.,status%20is%20%E2%80%9C302%20Found%E2%80%9D.).  

What these methods all have in common is that they work with express.js and sending HTTP responses.  
