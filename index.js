const express = require('express');
const app = express();

app.get('/', (req, res) => {
    if (req.query.i === undefined) {
        res.set('Content-Type', 'text/html');
        res.send('<meta property="og:title" content="Embed not found" />')
    } else if (req.query.i === 'discord') {
        res.set('Content-Type', 'text/html');
        res.send(`<meta property="og:title" content="Note to Discord Staff" />
        <meta property="og:description" content="This is a script development community. We do not spread files which disrupt user's computers, we do not crack products and distribute them, we do not sell compromised accounts." />
        <meta name="theme-color" content="#8c34eb">`);
    }
})

app.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log('Listening on port 3000');
})