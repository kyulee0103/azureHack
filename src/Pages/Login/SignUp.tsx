import {useState} from 'react'
import Header from '../../Components/Header'
import styled from 'styled-components'
import axios from 'axios'

const Middle = styled.div`
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 38px;
    margin-top: 30px;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 52px;
    height: 120px;
`
const Name = styled.label`
    margin-top: 0;
    margin-bottom: 8px;
    color: #000000;
    font-weight: 700;
    font-size: 16px;
    opacity: 0.4;
`
const Input = styled.input`
    height: 48px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 99px;
    color: #000000;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    border: 0px;
    width: 100%;
    &:focus {
        outline: 2px solid ${({theme}) => theme.color.main};
    }
    &::placeholder {
        color: #00000026;
    }
`
const Btn = styled.button`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: ${({theme}) => theme.color.main};
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    p {
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
    }
`

const Btn2 = styled.button`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #c4c4c4;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    p {
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
    }
`
const Warning = styled.p`
    margin: 0px;
    margin-top: 10px;
    color: #ff6e0e;
    font-size: 14px;
    font-weight: 700;
`

function SignUp() {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i
    const emailCheck = (id: string) => {
        return emailRegEx.test(id)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState('')

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(e.target.value)
    }
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://43.201.208.224:3000/user',
            data: {
                email,
                password,
                name: 'kyulee',
                phone: '010-1111-1111',
                birthday: '02-01-03',
                mbti: 'ENTP',
                gender: 'female',
                school: '고려대학교',
                grade: 3,
            },
        })
            .then(function (response) {
                console.log(response)
                axios({
                    method: 'post',
                    url: 'http://43.201.208.224:3000/auth',
                    data: {
                        email,
                        password,
                    },
                })
                    .then(function (response) {
                        console.log('get! success!')
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <>
            <Header name="회원가입" xExist={true} path="/login" />
            <Middle>
                <p>회원가입하고 채팅을 시작해봐!</p>
            </Middle>
            <form autoComplete="off" onSubmit={onSubmit}>
                <Box>
                    <Name htmlFor="email">아이디</Name>
                    <Input
                        onChange={onChangeEmail}
                        value={email}
                        id="email"
                        placeholder="이메일 주소"
                        type="email"
                        required
                    ></Input>
                    {/* {email.length >= 1 && !emailCheck(email) ? <Warning>이메일 주소를 다시 확인해줘!</Warning> : null} */}
                </Box>
                <Box>
                    <Name htmlFor="password">비밀번호</Name>
                    <Input
                        onChange={onChangePassWord}
                        value={password}
                        id="password"
                        placeholder="비밀번호"
                        type="password"
                        required
                    ></Input>
                </Box>
                <Box>
                    <Name htmlFor="check">비밀번호 확인</Name>
                    <Input
                        onChange={onChangeCheck}
                        id="check"
                        placeholder="비밀번호 한 번 더!"
                        type="password"
                        required
                    ></Input>
                    {check.length >= 1 && check !== password && <Warning>비밀번호가 안맞아! 다시 확인해줘!</Warning>}
                </Box>
                {emailCheck(email) && check === password && check.length >= 1 ? (
                    <Btn type="submit">
                        <p>완료!</p>
                    </Btn>
                ) : (
                    <Btn2 disabled>
                        <p>정보를 정확히 입력해줘!</p>
                    </Btn2>
                )}
            </form>
        </>
    )
}

export default SignUp
