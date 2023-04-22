import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Main() {
    const navigate = useNavigate()

    const onClick = () => {
        axios({
            method: 'post',
            url: 'http://43.201.208.224:3000/chat-room',
            data: {},
        })
            .then(function (response) {
                console.log(response)
                navigate('Chat', {state: {chatId: response.data._id}})
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <>
            <h1>일단 여기가 메인페이지</h1>
            <button onClick={onClick}>채팅 시작하기</button>
        </>
    )
}

export default Main
