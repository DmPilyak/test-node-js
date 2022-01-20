const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8000;

const urlencodedParser = express.urlencoded({extended: true});
app.use(
	cors({
		origin: "*"
	})
)
app.use(express.json());

app.get('/', (req, res) =>{
	res.sendFile(__dirname + "/home.html");
})

app.get('/testget', (req, res) =>{
	console.log(req.url, req.method);
	res.send({
		'user_id': 5,
    	'token': "token1",
    	'geo': "UK"
	})
	
	res.sendFile(__dirname + "/about.html");
})

app.post("/about", urlencodedParser, (req, res) => {
	console.log(req.method);
	console.log(req.body.name);
	res.status(201).send(JSON.stringify({"from_JS": req.body.name}));
})

app.listen(PORT, () => {
	console.log('Server has been started...');
})