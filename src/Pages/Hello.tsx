import {useNavigate} from 'react-router-dom'

function Hello() {
    const navigate = useNavigate()
    return (
        <>
            <div>비로그인 유저의 메인페이지</div>
            <button
                onClick={() => {
                    navigate('/login')
                }}
            >
                적성 테스트 하러 가기
            </button>
        </>
    )
}

export default Hello
