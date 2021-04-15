import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '3390d573-69f1-4062-b44b-0c6be0d1788e';

const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm / > ;

        return ( <
            ChatEngine height = "100vh"
            projectID = { projectID }
            userName = { localStorage.getItem('username') }
            userSecret = { localStorage.getItem('password') }
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />}
                onNewMessage = {
                    () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
                }
                />
            );
        };



        export default App;