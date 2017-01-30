var dash_button = require('node-dash-button');

var my_button = "50:f5:da:80:8c:ff";

var dash = dash_button(my_button, null, null, "udp");

dash.on("detected", function (){
  console.log("Ding dong!");
});
