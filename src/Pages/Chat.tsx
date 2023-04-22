import ChatHeader from '../Components/ChatPage/ChatHeader'
import styled from 'styled-components'
import Sending from '../assets/send.png'
import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

const MyAnswer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 10px;
    margin-bottom: 10px;
`
const ChatBox = styled.div`
    height: ${window.innerHeight - 140}px;
    overflow: scroll;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 10vh;
`
const Purple = styled.div`
    background-color: #c571f8;
    border-radius: 15px 15px 5px 15px;
    padding: 16px;
    display: inline-block;
    p {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        margin: 0;
    }
`
const Response = styled.div``
const Time = styled.p`
    margin-top: 5px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 10px;
    color: #505050;
    line-height: 12px;
`
const Write = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: rgb(242, 242, 242);
    height: 75px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border: 0;
`
const Input = styled.input`
    border-radius: 10px;
    background-color: #ffffff;
    border-radius: 15px;
    border: 0;
    height: 40px;
    width: 70vw;
    padding-left: 15px;
    padding-right: 15px;

    outline: none;
    font-size: 14px;
`
const Send = styled.div`
    width: 40px;
    height: 40px;
    background-color: #c571f8;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 20px;
        height: 20px;
    }
`

function Chat() {
    const [msg, setMsg] = useState('')
    const location = useLocation()
    const CHAT_ID = location.state.chatId
    type Msg = {data: string; time: any}
    const [msgList, setMsgList] = useState<Msg[]>([])
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value)
    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const date = new Date()
        let hour = date.getHours()
        let min = date.getMinutes().toString()
        let dayOrNight = 'am'
        if (hour > 12) {
            hour -= 12
            dayOrNight = 'pm'
        }
        if (min.length < 2) {
            min = '0' + min.toString()
        }
        setMsgList([...msgList, {data: msg, time: `${hour}:${min} ${dayOrNight}`}])
        setMsg('')
        console.log('msgList : ', msgList)
        axios({
            method: 'post',
            url: 'http://43.201.208.224:3000/chat',
            data: {
                chatRoomId: CHAT_ID,
                input: msg,
            },
        })
            .then(function (response) {
                console.log('chat response : ', response)
            })
            .catch(function (e) {
                console.log('this is error!')
                console.log(e)
            })
    }

    return (
        <>
            <ChatHeader name="ai 이름" />
            <ChatBox>
                {msgList.length >= 1 &&
                    msgList.map((message, idx) => {
                        return (
                            <>
                                <MyAnswer key={idx}>
                                    <Purple key={idx}>
                                        <p>{message.data}</p>
                                    </Purple>
                                    <Time>{message.time}</Time>
                                </MyAnswer>
                            </>
                        )
                    })}
            </ChatBox>
            <Write autoComplete="off" onSubmit={onSubmit}>
                <Input placeholder="Send a message..." value={msg} onChange={onChange} />
                <Send>
                    <img src={Sending} />
                </Send>
            </Write>
        </>
    )
}

export default Chat
