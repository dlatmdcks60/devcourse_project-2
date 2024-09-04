# 배운 내용으로 간단한 게시판 만들기
### `HTTP`method
- post (생성)
- get (조회)
- put (수정)
- delete (삭제)
### `Node.js` 외부 모듈
#### NPM : Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램
#### NPM으로 express 모듈 설치
```js
npm i express --save
```
#### express 적용
```js
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(3000);
```
### `Node.js` 객체
객체는 어떠한 속성값과 행동을 가지고 있는 데이터
#### JSON
```js
let person = {
	name: "Seung",
	age: 26
}
```
#### API JSON
```js
app.get('/test', (req, res) => {
    res.json({title: "test"});
});
```
### `express` Parameter
```js
app.get('/products/:n', (req, res) => {
    res.json({
        num: req.params.n
    });
});
```
### javascript `Map`
```js
let db = new Map();
db.set(1, "NoteBook");
db.set(2, "Cup");
db.set(3, "Chair");

console.log(db) //Map(3) { 1 => 'NoteBook', 2 => 'Cup', 3 => 'Chair' }
console.log(db.get(1)) //NoteBook
```

### 게시글 등록
- post 요청으로 body에 title, content, userId값을 전달해준다.
  ```js
  {
    "title": "테스트 제목1",
    "content": "테스트 글입니다 1",
    "userId": "testId"
  }
  ```
- response
  ```js
  {
    "result": true,
    "uploadData": {
        "title": "테스트 제목1",
        "content": "테스트 글입니다 1",
        "userId": "testId"
    }
  }
  ```
### 게시글 조회
- get 요청으로 `/post/:id` 파라미터값에 게시글 아이디를 전달한다.
- response
  ```js
  {
    "result": true,
    "postData": {
        "title": "테스트 제목1",
        "content": "테스트 글입니다 1",
        "userId": "testId"
    }
  }
  ```
