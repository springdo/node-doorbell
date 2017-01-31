# node-doorbell
A VERY simple node app and NodeRED flow for hacking an Amazon Dash button into a Doorbell that texts (using twillio) when someone is at the door


## Prereqs
----------
1. Twillio Account
2. Bluemix Account


## Setup
----------
1. NodeRED
Copy the `node-red-flow.json` into a new IBM NodeRED flow. On the flow; edit the `twilio-api` to reflect your
 - number from (gotten on twillio dashboard)
 - Account id from twillio
 - twillio secret

Add the respondees from your twillio account that should receive the message


2. Nodejs app


 - Run `npm install`

 - The id of the dash button can be gotten by setting up a new button but NOT selecting a product at that point in the process in the Amazon app. Then run `sudo node_modules/node-dash-button/bin/findbutton` and press the dash button. Capture the output that has something simillar to this only with your unique device ID
 ```
 Possible dash hardware address detected: 50:f5:da:80:8c:ff Manufacturer: Amazon Technologies Inc. Protocol: udp
 ```

 - Open `server.js` and change the node red endpoint and the id of the Dash button appropriately. The example below reflects my endpoint and button id.
```
var dash = dash_button("50:f5:da:80:8c:ff", null, null, "udp");
var node_endpoint = "https://ds-dash-doorbell.eu-gb.mybluemix.net/ding-dong";
```


## Deploy
----------
1. to run the app
```
npm start
```


2. Docker can be used to Build and Deploy the app.
 ```
 docker build -t springdo/doorbell .
 docker run -d -i --net=host --name doorbell springdo/doorbell
 ```
The `--net=host` is necessary to capture tcp dump on the wifi network your button is attached to.


