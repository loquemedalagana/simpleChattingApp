# React Chat app with node.js (express, socket.io)
## 나중에 추가해야 할 기능

<ol>
<li>파일 첨부 기능</li>
<li>데이터베이스에서 불러오는 기능</li>
<li>룸을 하나로 통합하는 기능</li>
<li>응용 좀 해서 DM으로 바꾸기</li>
</ol>

<hr/>

## 정리할 내용
<ul>
<li>08.07 배운 내용 (서버, 클라 통신) -> 첫 번째 user effect</li>

``` javascript
//client (chat.js)
useEffect(() => {
    const {name, room} = queryString.parse(location.search); //destructured

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    //console.log(socket);
    socket.emit('join', { name, room }, ({ error }) => {
        alert(error);
    });

}, [ENDPOINT, location.search]); //오직 rerander할때만 이펙트가 옴
```

``` javascript
//server (index.js)
socket.on('join', ({name, room}, callback) => { //매개변수가 object
    console.log(name, room);

    const error = true;

    // if(error){ //error handling
    //     callback({error: 'error'});
    // }
});
```

<li>08.07~ managing users in users.js</li>

<li></li>

<li></li>
</ul>

#### $표시 넣을 때 따옴표 조심!!!!!!
``` javascript
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```