import styled, {keyframes} from 'styled-components'
import Union from '../assets/Union.svg'
import Open from '../assets/hello.png'
import Smile from '../assets/smile.png'

const Total = styled.div`
    position: relative;
`

// const typing = keyframes`
//   from {
//     width: 0;
//   }
//   to {
//     width: 100%;
//   }
// `

// const blink = keyframes`
//   from, to {
//     border-color: transparent;
//   }
//   50% {
//     border-color: #0066ff;
//   }
// `

const Box = styled.div`
    position: relative;
    margin-top: 50px;
    text-align: center;
    p {
        z-index: 1000;
        color: #0066ff;
        font-weight: 600;
        font-size: 20px;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        margin: 6px;
    }

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 1;
        z-index: 1;
    }
`
const Name = styled.div`
    width: 78px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #0066ff;
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 26%;
    z-index: 3000;
    p {
        font-weight: 700;
        font-size: 16px;
        color: #0066ff;
    }
`

const Img = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 60px 30px 10px 30px;
    img {
        width: 245px;
        height: 236px;
    }
`
const Under = styled.div`
    text-align: center;
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

const Say: React.FC<SayProps> = ({line1, line2, num, eyes, under}) => {
    return (
        <>
            <Total>
                <Box>
                    <img src={Union} />

                    <p>{line1}</p>
                    {num && <p>{line2}</p>}
                </Box>
                <Name>
                    <p>블럭이</p>
                </Name>
            </Total>
            <Img>{eyes ? <img src={Open} /> : <img src={Smile} />}</Img>
            <Under>
                <p>{under}</p>
            </Under>
        </>
    )
}

export default Say
