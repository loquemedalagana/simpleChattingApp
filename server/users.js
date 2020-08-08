//manage users (나중에 DB랑 연결할 부분)
//users들이 하는 행동들을 이 파일에서 관리함

const users = []; //DB에서 user 불러 옴 (DM일때는 나랑 보낸 사람만~)

const addUser = ({id, name, room}) => { //3 parameters user 정보 받아옴
    //나중에 DB랑 연결할 때는 DB에서 받아옴
    name = name.trim().toLowerCase(); //공백제거 + 소문자
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);
    if(existingUser){ //중복확인
        return {error : 'Username is taken'};
    }

    const user = {id, name, room};
    users.push(user); //임시임! 나중에 DB들어가면 달라짐

    return { user }; //새로 더해진 user
};

const removeUser = ( id ) => {
    const idx = users.findIndex((user) => user.id === id);

    if(idx !== -1){
        return users.splice(idx, 1)[0]; //배열 제거하기
    }
};

const getUser = ( id ) => users.find((user) => user.id === id);

//filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환.
const getUsersInRoom = ( room ) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };