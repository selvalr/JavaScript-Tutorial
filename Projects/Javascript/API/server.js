const express = require('express');
const cors=require('cors');

const app = express();

const PORT = 3000;

app.use(cors())

const data = [
	{ name: 'John', age: 30, group: 'A' },
	{ name: 'Mary', age: 25, group: 'B' },
	{ name: 'Mike', age: 20, group: 'A' },
	{ name: 'Jane', age: 15, group: 'C' },
	{ name: 'Peter', age: 25, group: 'B' }
  ];

app.get('/', (req, res) => {
	res.status(200);
	res.json(data);
});

app.listen(PORT, (error) => {
	if (!error)
		console.log("Server is Successfully Running	and App is listening on port " + PORT)
	else
		console.log("Error occurred, server can't start", error);
}
);
