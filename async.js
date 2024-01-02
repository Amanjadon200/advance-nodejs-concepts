const https = require("https");
const presentTime = Date.now();
console.log("Start", presentTime);
function doRequest() {
  https
    .request("https://google.com", (res) => {
      res.on("data", (chunk) => {
        // console.log(chunk.toString());
      });
      res.on("end", () => {
        console.log("End", Date.now() - presentTime);
      });
    })
    .end();
}
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
// output -> in this case all the request are made at the same time and also completed at the same time
//  because libuv is handling all the request at the same time and it is delegating request to the OS which
//  does not block the event loop and hence all the request are completed at the same time
// Start 1704202289679
// End 429
// End 432
// End 433
// End 435
// End 438
// End 442
// End 445
// End 446
// End 452