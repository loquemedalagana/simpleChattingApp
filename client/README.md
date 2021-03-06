This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<hr/>

## a web app is being installed from scratch
우선 채팅, PWA 테스트합니다.
<hr/>

## tutorial video
https://youtu.be/ZwFA3YMfkoc

## 설치 -> 클라 서버 순
#### client
```
mkdir client
cd client
npx create-react-app ./
npm i --save react-router socket.io-client react-scroll-to-bottom react-emoji query-string

npm i --save react-router-dom
```
<br/>

#### server
``` 
cd ..
mkdir server
cd server
npm init -y [반드시 npm init는 서버 할 때만!]

npm i --save cors nodemon express socket.io
```
<hr/>

## socket io emitting events 
### 클라에서 전송한 메시지 출력
https://socket.io/get-started/chat/#Emitting-events
<br/>

``` javascript
let socket; //empty variable to save data from client

const Chat = ({ location }) => {
    const [name, setName] = useState(''); //state
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'; //배포 후 이부분 바꿈 (서버로 도착했을때 주소)

    useEffect(() => {
        const {name, room} = queryString.parse(location.search); //destructured

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        //console.log(socket);
        socket.emit();
        
    }, [ENDPOINT, location.search]); //오직 rerander할때만 이펙트가 옴
    return (
        <h1>chat</h1>
    );
};

```
<hr/>

## 서버

``` javascript
```


<hr/>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
