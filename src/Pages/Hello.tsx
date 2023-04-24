import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import Say from '../Components/Say'
import KaKao from '../assets/kakao_login_large_wide.png'
import axios from 'axios'

const Title = styled.div`
    text-align: center;
    p {
        color: #0066ff;
        font-weight: 700;
        font-size: 24px;
    }
`

const LoginBox = styled.div`
    text-align: center;
    img {
        width: 80%;
    }
`

function Hello() {
    const navigate = useNavigate()
    const onClick = () => {
        axios({
            method: 'get',
            url: 'http://43.201.208.224:3000/auth/kakao',
        })
            .then(function (response) {
                console.log(response)
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
            <Say
                line1="10년 후 너는"
                line2="뭘 하고 있을까?"
                num={true}
                eyes={true}
                under="3초컷 나의 미래 스포당하기"
            />
            <LoginBox onClick={onClick}>
                <img src={KaKao} />
            </LoginBox>
        </>
    )
}

export default Hello
