const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.json({ data: 'Hello'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`)});
