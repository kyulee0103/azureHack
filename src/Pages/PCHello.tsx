import styled from 'styled-components'
import Lottie from 'lottie-react'
import sorry from '../assets/6873-under-maintenance.json'

const Title = styled.div`
    margin-left: 5vw;
    margin-top: 13vh;
    p {
        font-size: 70px;
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 15px;
        letter-spacing: 10px;
    }
`

const Box = styled.div`
    text-align: center;
    display: flex;
    margin-top: 10vh;
    justify-content: center;
`

function PCHello() {
    return (
        <>
            <Title>
                <p>아직 PC 버전은 준비하고 있어요!!</p>
                <p>모바일에서 접속해주세요 🥺</p>
            </Title>
            <Box>
                <Lottie animationData={sorry} loop={true} style={{width: '550px', height: '550px'}} />
            </Box>
        </>
    )
}

export default PCHello
