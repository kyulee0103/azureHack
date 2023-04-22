import styled from 'styled-components'
import ID from '../../assets/user.svg'
import PW from '../../assets/lock.svg'
import BPW from '../../assets/lockBefore.svg'
import BID from '../../assets/userBefore.svg'
import {useState} from 'react'
import Kakao from '../../assets/kakao_login_large_wide.png'

const Title = styled.div`
    margin-top: 32px;
    height: 52px;
    margin-bottom: 32px;
    p {
        margin-top: 64px;
        text-align: center;
        font-weight: 600;
        font-size: 24px;
    }
`

const Middle = styled.div`
    height: 72px;
    margin-bottom: 32px;
    p {
        font-weight: 500;
        margin-top: 22px;
        text-align: center;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.5);
    }
`

const Form = styled.form`
    padding-left: 30px;
    padding-right: 30px;
`
const LoginBox = styled.div`
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    input {
        background: rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        width: ${window.innerWidth - 110}px;
        height: 48px;
        padding: 0px 24px;
        font-size: 16px;
        &::placeholder {
            font-size: 16px;
        }
    }
    img {
        position: absolute;
        right: 10vw;
        top: 15px;
    }
`
const Btn = styled.div`
    text-align: center;
    button {
        background: #606060;
        border-radius: 5px;
        border: 0px;
        height: 48px;
        width: 100%;
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
        margin-top: 50px;
    }
`

const KaKao = styled.div`
    margin-left: 30px;
    margin-top: 20px;
    margin-right: 30px;
    img {
        width: 100%;
    }
`

const Small = styled.div`
    display: flex;
    margin-top: 30px;
    text-align: center;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: 30px;
    margin-right: 30px;
    padding-bottom: 40px;
    margin-bottom: 30px;
`
const Word = styled.div`
    text-align: center;
    span {
        color: rgba(0, 0, 0, 0.5);
        font-weight: 500;
        font-size: 16px;
        padding-left: 16px;
        padding-right: 16px;
    }
`
const Mid = styled.div`
    span {
        color: rgba(0, 0, 0, 0.5);
        font-weight: 500;
        font-size: 16px;
        padding-left: 16px;
        padding-right: 16px;
        border-left: 1px solid rgba(0, 0, 0, 0.5);
        border-right: 1px solid rgba(0, 0, 0, 0.5);
    }
`

function Login() {
    const [id, setID] = useState('')
    const [pw, setPW] = useState('')

    const onChangeID = (e: React.ChangeEvent<HTMLInputElement>) => {
        setID(e.target.value)
    }
    const onChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPW(e.target.value)
    }
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        alert(`로그인 정보
		id : ${id}
		password : ${pw}`)
        setID('')
        setPW('')
    }
    return (
        <>
            <Title>
                <p>BLUCK</p>
            </Title>
            {/* <Middle>
                <p>로그인이 필요해 :)</p>
            </Middle> */}
            <Form onSubmit={onSubmit}>
                <LoginBox>
                    <input value={id} placeholder="아이디" onChange={onChangeID} />
                    {id === '' ? <img src={BID} /> : <img src={ID} />}
                </LoginBox>
                <LoginBox>
                    <input value={pw} placeholder="비밀번호" type="password" onChange={onChangePW} />
                    {pw === '' ? <img src={BPW} /> : <img src={PW} />}
                </LoginBox>
                <Btn>
                    {id === '' || pw === '' ? <button disabled>로그인</button> : <button type="submit">로그인</button>}
                </Btn>
            </Form>
            <Small>
                <Word>
                    <span>회원가입</span>
                </Word>
                <Mid>
                    <span>아이디 찾기</span>
                </Mid>
                <Word>
                    <span>비밀번호 찾기</span>
                </Word>
            </Small>
            <Word>
                <span>간편 로그인</span>
            </Word>
            <KaKao>
                <img src={Kakao} />
            </KaKao>
        </>
    )
}

export default Login
