const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('God i hope this works for git push');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
