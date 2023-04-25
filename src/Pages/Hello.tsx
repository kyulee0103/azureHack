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
    const REST_API_KEY = 'a82251b4020b624e88317d3bc4d37c63'
    const REDIRECT_URI = 'http://43.201.208.224:3000/auth/kakao/callback'
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    console.log(KAKAO_AUTH_URL)
    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL
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
    // const onClick = () => {
    //     axios({
    //         method: 'get',
    //         url: 'http://43.201.208.224:3000/auth/kakao',
    //     })
    //         .then(function (response) {
    //             console.log(response)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }
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
            <LoginBox onClick={kakaoLogin}>
                <img src={KaKao} alt="" />
            </LoginBox>
        </>
    )
}

export default Hello
