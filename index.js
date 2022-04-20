const express = require('express');
const app = express();
const embeds = require('./embeds');

app.get('/', (req, res) => {
    const embed = req.query.i;
    const e = embeds[embed] || 'unknown';

    if (e !== 'unknown') {
        if (e.image) {
            res.set('Content-Type', 'text/html');
            res.send(`<meta property="og:title" content="${e.title || 'Title'}" />
<meta property="og:description" content="${e.description || 'Description'}" />
<meta name="theme-color" content="${e.colour || '#8c34eb'}">
<meta content="${e.image}" property="og:image" />`)
        } else {
            res.set('Content-Type', 'text/html');
            res.send(`<meta property="og:title" content="${e.title || 'Title'}" />
<meta property="og:description" content="${e.description || 'Description'}" />
<meta name="theme-color" content="${e.colour || '#8c34eb'}">`)
        }
    } else res.send(e);
})

app.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log('Listening on port 3000');
})