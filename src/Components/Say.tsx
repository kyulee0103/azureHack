import styled from 'styled-components'
import Union from '../assets/hello.svg'
import Open from '../assets/hello.png'
import Smile from '../assets/smile.png'
import Typewriter from 'typewriter-effect'

const Total = styled.div`
    position: relative;
`

const Box = styled.div`
    position: relative;
    width: 295px;
    place-items: center;
    height: 144px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    p {
        color: #0066ff;
        font-weight: 600;
        font-size: 17px;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        margin: 6px;
        top: 60px;
    }

    img {
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 1;
        z-index: -1;
    }
`
const Name = styled.div`
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 51px;
    bottom: 46px;
    z-index: 1;
    p {
        font-weight: 700;
        font-size: 16px;
        color: #0066ff;
    }
`

const Img = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 30px 30px 10px 30px;
    img {
        width: 245px;
        height: 237px;
    }
`
const Under = styled.div`
    text-align: center;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.25);
    font-weight: 500;
    font-size: 20px;
    p {
        margin: 16px;
    }
`
type SayProps = {
    line1: string
    line2: string
    num: boolean
    eyes: boolean
    under: string
}

const Box2 = styled.div`
    width: 230px;
    place-items: center;
    height: 144px;
    z-index: 1000;
    padding-top: 60px;
    margin-left: auto;
    margin-right: auto;
`

const Say: React.FC<SayProps> = ({line1, line2, num, eyes, under}) => {
    return (
        <>
            <Total>
                <Box>
                    <img src={Union} alt=""></img>
                    {eyes ? (
                        <Box2>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            '<span style="color: #0066ff; font-weight: 600; font-size: 17px; z-index : 6000 "}>안녕 10년 후 너는 어떤 모습일까? </span>',
                                        )
                                        .pauseFor(1000)
                                        .typeString(
                                            '<span style="color: #0066ff; font-weight: 600; font-size: 17px; z-index : 6000 "}>궁금하지 않아? </span>',
                                        )
                                        .pauseFor(500)
                                        .typeString(
                                            '<span style="color: #0066ff; font-weight: 600; font-size: 17px; z-index : 6000 "}>내가 알려줄게!</span>',
                                        )
                                        .pauseFor(2500)
                                        .start()
                                }}
                            ></Typewriter>
                        </Box2>
                    ) : (
                        <Box2>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            '<span style="color: #0066ff; font-weight: 600; font-size: 17px; z-index : 6000 "}>채팅을 시작하기 전에 먼저 이름을 알려줘! </span>',
                                        )
                                        .pauseFor(2500)
                                        .start()
                                }}
                            ></Typewriter>
                        </Box2>
                    )}

                    <Name>
                        <p>블럭이</p>
                    </Name>
                </Box>
            </Total>
            <Img>{eyes ? <img src={Open} alt="" /> : <img src={Smile} alt="" />}</Img>
            <Under>
                <p>{under}</p>
            </Under>
        </>
    )
}

export default Say
