import Lottie from 'lottie-react'
import error from '../assets/84918-404-error-doodle-animation.json'

function NotFound() {
    return (
        <>
            {/* <h1 style={{textAlign: 'center'}}>404 Not Found ...</h1> */}
            <Lottie animationData={error} loop={true} style={{width: '100%', marginTop: '15vh'}} />
            {/* <h2 style={{textAlign: 'center'}}>올바른 경로로 접속해주세요 🥺</h2> */}
        </>
    )
}

export default NotFound
