import ChatHeader from '../Components/ChatPage/ChatHeader'
import styled from 'styled-components'
import Sending from '../assets/send.png'
import {useEffect, useRef, useState} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import Lottie from 'lottie-react'
import waitGPT from '../assets/64108-loading-dots.json'
import writing from '../assets/94683-loading-dots.json'

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
    background-color: ${({theme}: any) => theme.color.main};
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

const Purple2 = styled.div`
    background-color: ${({theme}: any) => theme.color.main};
    border-radius: 30px 30px 3px 30px;
    padding: 6px;
`
// const Response = styled.div``
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

const Write2 = styled.div`
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
    background-color: ${({theme}: any) => theme.color.main};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 20px;
        height: 20px;
    }
`

const Send2 = styled.div`
    width: 40px;
    height: 40px;
    background-color: rgba(96, 96, 96, 0.15);
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
const Grey2 = styled.div`
    background: #efefef;
    border-radius: 30px 30px 30px 3px;
    padding: 6px;
`

type Msg = {data: string; time: any; res: boolean}

function Chat() {
    const MY_NAME = localStorage.getItem('name')
    const [firstMsg, setFirstMsg] = useState<Msg[]>([])
    const FIRST_CHAT = [
        `${MY_NAME} 안녕! 난 블럭이야. 
    요즘 진로가 고민이라며!
    내가 너의 진로 고민을 해결해줄게! 
    간단한 질문들에 답해주면 돼! 쉽지?
    
    나만 믿고 따라와! 
    `,
        `${MY_NAME}! 물어볼게 몇 개 있어`,
        `너가 생각나는 것들 최대한 자유롭게 얘기해줘`,
    ]
    const [msg, setMsg] = useState('')
    const [firstStop, setFirstStop] = useState<boolean>(true)
    const [wait, setWait] = useState(false)
    const [write, setWrite] = useState(false)
    const location = useLocation()
    const CHAT_ID = location.state.chatId
    const [msgList, setMsgList] = useState<Msg[]>([])
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWrite(true)
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
        setWrite(false)
        setMsgList((prevMsgList) => [...prevMsgList, {data: msg, time: `${hour}:${min} ${dayOrNight}`, res: false}])
        setMsg('')
        setTimeout(() => {
            setWait(true)
        }, 500)

        axios({
            method: 'post',
            url: 'https://mungtage.site/chat',
            data: {
                chatRoomId: CHAT_ID,
                input: msg,
            },
        })
            .then(function (response) {
                console.log(response)
                setWait(false)
                setMsgList((prevMsgList) => [
                    ...prevMsgList,
                    {data: response.data.data, time: `${hour}:${min} ${dayOrNight}`, res: true},
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

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://mungtage.site/chat-room/counsel/',
            params: {
                id: CHAT_ID,
            },
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
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

        const timeouts: any[] = []
        timeouts.push(
            setTimeout(() => {
                setFirstMsg([{data: FIRST_CHAT[0], time: `${hour}:${min} ${dayOrNight}`, res: false}])
            }, 500),
        )
        timeouts.push(
            setTimeout(() => {
                setFirstMsg((prevMsgList) => [
                    ...prevMsgList,
                    {data: FIRST_CHAT[1], time: `${hour}:${min} ${dayOrNight}`, res: false},
                ])
            }, 1500),
        )
        timeouts.push(
            setTimeout(() => {
                setFirstMsg((prevMsgList) => [
                    ...prevMsgList,
                    {data: FIRST_CHAT[2], time: `${hour}:${min} ${dayOrNight}`, res: false},
                ])
            }, 2500),
        )
        timeouts.push(
            setTimeout(() => {
                setWait(true)
                axios({
                    method: 'post',
                    url: 'https://mungtage.site/chat',
                    data: {
                        chatRoomId: CHAT_ID,
                        input: '시작',
                    },
                })
                    .then(function (response) {
                        console.log(response)
                        setFirstStop(false)
                        setWait(false)
                        setMsgList((prevMsgList) => [
                            ...prevMsgList,
                            {data: response.data.data, time: `${hour}:${min} ${dayOrNight}`, res: true},
                        ])
                    })
                    .catch(function (e) {
                        console.log('this is error!')
                        console.log(e)
                    })
            }, 3000),
        )
        return () => timeouts.forEach((timeout) => clearTimeout(timeout))
    }, [])

    const testing = () => {
        axios({
            method: 'post',
            url: 'https://mungtage.site/result',
            data: {
                chatRoomId: CHAT_ID,
                input: '결과값 좀 보내줘',
            },
            headers: {
                Authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDQ2ODZhOWZmYTQyNzcxYzNiM2Q2YjEiLCJzdGF0dXMiOiJwZW5kaW5nIiwiaWF0IjoxNjgyMzQ5MzY0LCJleHAiOjE2ODIzNTI5NjR9.4PhO8iYItigdoEroy3RoXKFufcBpTTPDjcxrwuwIskA',
            },
        })
            .then(function (response) {
                console.log('결과값')
                console.log(response)
            })
            .catch(function (e) {
                console.log('this is error!')
                console.log(e)
            })
    }
    return (
        <Total>
            <ChatHeader name="블럭이" />
            <ChatBox ref={scrollRef}>
                {firstMsg.map((msg, idx) => {
                    return (
                        <ChatBot>
                            <Grey>
                                <p>{msg.data}</p>
                            </Grey>
                            <Time>{msg.time}</Time>
                        </ChatBot>
                    )
                })}
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
                {write && (
                    <MyAnswer>
                        <Purple2>
                            <Lottie animationData={writing} loop={true} style={{width: '40px', height: '40px'}} />
                        </Purple2>
                        <Time>작성중...</Time>
                    </MyAnswer>
                )}
                {wait && (
                    <ChatBot>
                        <Grey2>
                            <Lottie animationData={waitGPT} loop={true} style={{width: '40px', height: '40px'}} />
                        </Grey2>
                        <Time>고민중...</Time>
                    </ChatBot>
                )}
                <button onClick={testing}>값을 보내줘</button>
            </ChatBox>
            {firstStop ? (
                <Write2>
                    <Input placeholder="채팅을 읽어줘..!" disabled />
                    <Send2>
                        <img src={Sending} alt="" />
                    </Send2>
                </Write2>
            ) : wait ? (
                <Write2>
                    <Input placeholder="답장을 고민하고 있어...!" disabled />
                    <Send2>
                        <img src={Sending} alt="" />
                    </Send2>
                </Write2>
            ) : (
                <Write autoComplete="off" onSubmit={onSubmit}>
                    <Input placeholder="여기에 답장해줘!" value={msg} onChange={onChange} />
                    <Send onClick={onSubmit}>
                        <img src={Sending} alt="" />
                    </Send>
                </Write>
            )}
        </Total>
    )
}

export default Chat
