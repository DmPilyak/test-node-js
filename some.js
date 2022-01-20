
function sendUID(){
    var time = Math.floor(Date.now() / 1000);
    var login = '120178';
    var secret = "esp00zMvMiUNEE5DLLc8yz54F7yrkWZl0oogizmr5NaGhmIVSp";
    var body = {"timeout": 30,
                "ops": [
                    {
                    "conv_id": 1027185,
                    "type": "create",
                    "obj": "task",
                    "data": {
                        "version": "Corezoid API DP 2 (test)",
                        "param": "somedata"
                        }
                    }
                ]};

                var signature = CryptoJS.enc.Hex.stringify(
                CryptoJS.SHA1(time + secret + JSON.stringify(body) + secret)
            );

fetch('https://sync-api.corezoid.com/api/1/json/' + login + '/' + time + '/' + signature + '', {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
          "Access-Control-Allow-Origin": "http://localhost:8000",
          "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
          "Content-type": "application/json; charset=UTF-8",
          "Accept": "application/json",
        }
}).then(response => {
console.log( response );
})
.catch(error => {
console.log( error );
});
}