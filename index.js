const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

//app.use(express.json());
const urlencodedParser = express.urlencoded({extended: true});
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", '*');
	res.header("Access-Control-Allow-Headers", 'Origin, X-Request-With, Content-Type, Accept');
	if(req.method === 'OPTIONS') {
		res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({})
	}
	next();
});

app.get('/', (req, res) =>{
	res.sendFile(__dirname + "/home.html");
})

app.get('/about', (req, res) =>{
	console.log(req.url, req.method);
	/*res.send({
		'user_id': 5,
    	'token': "token1",
    	'geo': "UK"
	})*/
	
	res.sendFile(__dirname + "/about.html");
})

app.post("/about", urlencodedParser, (req, res) => {
	console.log(req.method);
	console.log(req.body.name);
	//res.sendFile(__dirname + "/about.html");
	//res.sendFile(__dirname + "/about.html");
	res.status(201).send("Create user " + req.body.name);
})

app.listen(PORT, () => {
	console.log('Server has been started...');
})