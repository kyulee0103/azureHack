import ChatHeader from '../Components/ChatPage/ChatHeader'
import styled from 'styled-components'
import Sending from '../assets/send.png'
import {useEffect, useRef, useState} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

const Total = styled.div`
    overflow: hidden;
`

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
    background-color: ${({theme}) => theme.color.main};
    border-radius: 30px 30px 3px 30px;
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
    background-color: ${({theme}) => theme.color.main};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 20px;
        height: 20px;
    }
`

const ChatBot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
`
const Grey = styled.div`
    background: #efefef;
    border-radius: 30px 30px 30px 3px;
    padding: 16px;
    display: inline-block;
    p {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #29363d;
        margin: 0;
    }
`

type Msg = {data: string; time: any; res: boolean}

function Chat() {
    const [msg, setMsg] = useState('')
    const location = useLocation()
    const CHAT_ID = location.state.chatId
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
        setMsgList((prevMsgList) => [...prevMsgList, {data: msg, time: `${hour}:${min} ${dayOrNight}`, res: false}])
        setMsg('')
        setTimeout(() => {
            setMsgList((prevMsgList) => [...prevMsgList, {data: '...', time: '고민중...', res: true}])
        }, 500)

        axios({
            method: 'post',
            url: 'http://43.201.208.224:3000/chat',
            data: {
                chatRoomId: CHAT_ID,
                input: msg,
            },
        })
            .then(function (response) {
                setMsgList((prevMsgList) => [
                    ...prevMsgList.slice(0, -1),
                    {data: response.data, time: `${hour}:${min} ${dayOrNight}`, res: true},
                ])
            })
            .catch(function (e) {
                console.log('this is error!')
                console.log(e)
            })
    }
    const scrollRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    })

    return (
        <Total>
            <ChatHeader name="블럭이" />
            <ChatBox ref={scrollRef}>
                {msgList.length >= 1 &&
                    msgList.map((message, idx) => {
                        return message.res ? (
                            <ChatBot key={idx}>
                                <Grey>
                                    <p>{message.data}</p>
                                </Grey>
                                <Time>{message.time}</Time>
                            </ChatBot>
                        ) : (
                            <MyAnswer key={idx}>
                                <Purple key={idx}>
                                    <p>{message.data}</p>
                                </Purple>
                                <Time>{message.time}</Time>
                            </MyAnswer>
                        )
                    })}
            </ChatBox>
            <Write autoComplete="off" onSubmit={onSubmit}>
                <Input placeholder="Send a message..." value={msg} onChange={onChange} />
                <Send onClick={onSubmit}>
                    <img src={Sending} />
                </Send>
            </Write>
        </Total>
    )
}

export default Chat
