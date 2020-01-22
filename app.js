const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render(index.html);
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})