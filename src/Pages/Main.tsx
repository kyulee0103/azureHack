import {useNavigate} from 'react-router-dom'

function Main() {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('Chat')
    }
    return (
        <>
            <h1>일단 여기가 메인페이지</h1>
            <button onClick={onClick}>채팅 시작하기</button>
        </>
    )
}

export default Main
