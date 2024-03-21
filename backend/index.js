const express = require('express');
const snippetController = require('./routes/notes');
const connection = require('./db');
const app = express();
const port = 5000; 
const cors=require('cors')

app.use(express.json());
app.use(cors());
app.post('/api/putdata', snippetController.submitSnippet);
app.get('/api/getdata', snippetController.getAllEntries);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
