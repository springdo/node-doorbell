var dash_button = require('node-dash-button');
var request = require('request');

var dash = dash_button("50:f5:da:80:8c:ff", null, null, "udp");
var node_endpoint = "https://ds-dash-doorbell.eu-gb.mybluemix.net/ding-dong";

console.log("Starting Doorbell App");

dash.on("detected", function (){
  console.log("Ding dong! Someone at the door");
  request(node_endpoint, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("success");
      console.log(body);
    } else {
      console.log("failure");
      console.log(error);
    }
  })
});
