const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
let db = new Map();
let dbIndex = 1;

app.get('/', (req, res) => {
    res.send('Chan Board');
});

app.post('/upload', (req, res) => {
    db.set(dbIndex++, req.body);

    res.json({
        result: true,
        uploadData: req.body,
    }); 
});

app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    if (!postId) {
        res.json({
            result: false,
            message: '올바르지 않은 게시글입니다.',
        });
    } else {
        const postData = db.get(postId);
        if (!postData) {
            res.json({
                result: false,
                message: '해당 게시글이 존재하지 않습니다.',
            });
        } else {
            res.json({
                result: true,
                uploadData: postData,
            });
        }
    }
});

app.listen(port, () => {
    console.log(`ChanBoard app listening on port ${port}`);
});
