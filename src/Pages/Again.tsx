import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import Say from '../Components/Say'

const Title = styled.div`
    text-align: center;
    p {
        color: #0066ff;
        font-weight: 700;
        font-size: 24px;
    }
`
const Box = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
`
const Test = styled.div`
    background: #0066ff;
    border-radius: 99px 99px 20px 99px;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
    }
`
const MyPage = styled.div`
    border: 1px solid #0066ff;
    border-radius: 5px 5px 5px 60px;
    background: #ffffff;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        color: #0066ff;
        font-weight: 700;
        font-size: 20px;
    }
`

function Again() {
    const navigate = useNavigate()

    const onClick = () => {
        axios({
            method: 'post',
            url: 'http://43.201.208.224:3000/chat-room',
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
            <Say line1="안녕  또 와줬구나!" line2=" " num={true} eyes={false} under="결과물을 확인해봐!" />
            {/* <button onClick={onClick}>채팅 시작하기</button> */}
            <Box>
                <Test onClick={onClick}>
                    <p>적성테스트</p>
                </Test>
                <MyPage>
                    <p>마이페이지</p>
                </MyPage>
            </Box>
        </>
    )
}

export default Again
