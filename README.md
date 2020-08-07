# React Chat app with node.js (express, socket.io)
### 나중에 무조건 파일 전송 기능 추가할 것!!!

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
if(error){ //error handling
    callback({error: 'error'});
}
```

<li>08.07~ managing users in users.js</li>

<li></li>

<li></li>
</ul>

#### $표시 넣을 때 따옴표 조심!!!!!!
``` javascript
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```