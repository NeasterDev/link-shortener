const express = require('express');
const app = express();

const PORT = 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));