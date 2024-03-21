const db = require('../db');

exports.submitSnippet = (req, res) => {
  const { username, language, stdin, sourcecode } = req.body;
  const snippet = { username, language, stdin, sourcecode };
  db.query('INSERT INTO table1 SET ?', snippet, (err, result) => {
    if (err) {
      console.error('Error submitting snippet:', err);
      res.status(500).send('Error submitting snippet');
      return;
    }
    console.log('Snippet submitted:', result);
    res.sendStatus(201);
  });
};

exports.getAllEntries = (req, res) => {
  db.query('SELECT * FROM table1', (err, results) => {
    if (err) {
      console.error('Error fetching entries:', err);
      res.status(500).send('Error fetching entries');
      return;
    }
    console.log(results);

    res.json(results);
  });
};
