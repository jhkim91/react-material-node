const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'images': 'http://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '900909',
            'gender': '남자',
            'job': '학생'
        },{
            'id': 2,
            'images': 'http://placeimg.com/64/64/1',
            'name': '홍길동2',
            'birthday': '910909',
            'gender': '남자2',
            'job': '학생2'
        },{
            'id': 3,
            'images': 'http://placeimg.com/64/64/2',
            'name': '홍길동3',
            'birthday': '920909',
            'gender': '남자3',
            'job': '학생3'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on por ${port}`));