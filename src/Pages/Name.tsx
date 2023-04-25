import styled from 'styled-components'
import Say from '../Components/Say'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

const Title = styled.div`
    text-align: center;
    p {
        color: #0066ff;
        font-weight: 700;
        font-size: 24px;
    }
`
const Btn = styled.div`
    background-color: ${({theme}: any) => theme.color.main};
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    p {
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
    }
`
const Form = styled.div`
    text-align: center;
    input {
        width: 244px;
        height: 48px;
        background: #f0f0f0;
        border: 0px;
        padding: 5px;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 0.1em;
        border-radius: 43px;
        text-align: center;
        &:focus {
            outline: 0;
            border: 2px solid ${({theme}: any) => theme.color.main};
        }
        &::placeholder {
            color: #00000075;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.05em;
        }
    }
`

function Name() {
    const navigate = useNavigate()
    const [name, setName] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onClick = () => {
        console.log('je?')
        localStorage.setItem('name', name)
        axios({
            method: 'post',
            url: 'https://mungtage.site/chat-room',
            data: {},
        })
            .then(function (response) {
                console.log(response)
                navigate('/chat', {state: {chatId: response.data._id}})
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <>
            <Title>
                <p>BLUCK</p>
            </Title>
            <Say line1="채팅을 시작하기 전에 먼저" line2="이름을 알려줘!" num={true} eyes={false} under="" />
            <Form>
                <input value={name} onChange={onChange} placeholder="이름을 입력해주세요"></input>
            </Form>
            <Btn onClick={onClick}>
                <p>블럭이랑 채팅 시작하기</p>
            </Btn>
        </>
    )
}

export default Name
