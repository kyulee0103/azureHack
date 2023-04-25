import styled from 'styled-components'
import Say from '../Components/Say'
import {useNavigate} from 'react-router-dom'

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

function NewMain() {
    const navigate = useNavigate()
    return (
        <>
            <Title>
                <p>BLUCK</p>
            </Title>
            <Say
                line1="안녕! 10년 후 너는 어떤 모습일까?"
                line2="궁금하지 않아? 내가 알려줄게!"
                num={true}
                eyes={true}
                under="3초컷 나의 미래 스포당하기"
            />
            <Btn
                onClick={() => {
                    navigate('/name')
                }}
            >
                <p>블럭이랑 채팅 시작하기</p>
            </Btn>
        </>
    )
}

export default NewMain
