import { SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage, chatSliceState, iMessage } from '../../store/slices/chatSlice';
import { userState } from '../../store/slices/userSlice';
import './style.css'
import io from "socket.io-client";
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { Socket } from 'socket.io-client';



export default function ChatPage() {
    const [message, setMessage] = useState('')
    const [socketState, setSocketState] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>()
    const [isConnected, setIsConnected] = useState<any>(false);
    const dispatch = useDispatch()
    const chat = useSelector(chatSliceState)
    const user: string = useSelector(userState).value || ''

    useEffect(() => {
        console.log('inside use effect');

        const socket = io('http://localhost:3001')
        setSocketState(socket)

        socket.on("connect", () => {
            console.log('socket server connected');
            setIsConnected(true);
        });
        socket.on("disconnect", () => {
            console.log('socket server - disconnected');
            setIsConnected(false);
        });
        socket.on("message", (newMessage: iMessage) => {
            console.log('newMessage from server:', newMessage);
            dispatch(addChatMessage({ user: newMessage.user, message: newMessage.message || '' }))
        });
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);


    return (
        <div className='chatWrapper'>
            <h2>
                Chat Page {isConnected ?? '[Connected]'}
            </h2>

            <p>Write something in the chat at the bottom</p>
            <div className='messagesContainer'>
                {chat.map((item: iMessage, index: number) => <p key={`messages${index}`}><b>{item.user}</b>:{item.message}</p>)}
            </div>
            Message here:<br /><input name='chat_message' type="text" onChange={(e) => {
                setMessage(e.target.value);
            }} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    console.log('return pressed', socketState);
                    const newMessage = { user: user, message: message.toString() };
                    console.log('message:', newMessage);
                    try {
                        if (socketState) { socketState.emit("message", newMessage); }
                    } catch (e) {
                        console.log('something went terribly wrong');

                    }
                    setMessage('');
                }
            }} value={message} /><br />
            (press Enter to send)

        </div>
    );
}