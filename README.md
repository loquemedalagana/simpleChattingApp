# React Chat app with node.js (express, socket.io)
### db는 설치하지 않았습니다.
<hr/>

## 정리할 내용
<ul>
<li>08.07 배운 내용 (서버, 클라 통신)</li>

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

<li></li>
</ul>

#### $표시 넣을 때 따옴표 조심!!!!!!
``` javascript
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```