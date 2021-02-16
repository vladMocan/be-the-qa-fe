const express = require('express');

const app = express();

app.use(express.static('./dist/fe-be-the-qa'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/fe-be-the-qa/'}),
);

app.listen(process.env.PORT || 4200);
