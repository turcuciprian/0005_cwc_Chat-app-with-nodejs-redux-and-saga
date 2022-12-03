import { SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage, chatSliceState } from '../../store/slices/chatSlice';
import { userState } from '../../store/slices/userSlice';
import './style.css'
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { iMessage } from '../../saga/types';
import { sagaSetChatAction } from '../../saga/actions/messages';



export default function ChatPage() {
    const [message, setMessage] = useState('')
    const [socketState, setSocketState] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>()
    const [isConnected, setIsConnected] = useState<any>(false);
    const dispatch = useDispatch()
    const chat = useSelector(chatSliceState)
    const user: string = useSelector(userState).value || ''

    useEffect(() => {
        const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io('http://localhost:3001')
            setSocketState(socket)
        dispatch(sagaSetChatAction(socket))

        // socket.on("connect", () => {
        //     setSocketState(socket)
        //     setIsConnected(true);
        // });
        // socket.on("disconnect", () => {
        //     setSocketState(null)
        //     setIsConnected(false);
        // });
        // socket.on("message", (newMessage: iMessage) => {
        //     dispatch(addChatMessage({ user: newMessage.user, message: newMessage.message || '' }))
        // });
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
                    const newMessage: iMessage = { user: user, message: message.toString() };
                    dispatch(addChatMessage(newMessage))
                    if (socketState) { socketState.emit("message", newMessage); }

                    setMessage('');
                }
            }} value={message} /><br />
            (press Enter to send)

        </div>
    );
}