import express from 'express';
const app = express();

import path from 'path';

app.use(express.static(path.join(__dirname, '..', 'publish_out')));

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;