import styled from 'styled-components'
import Union from '../assets/hello.svg'
import Open from '../assets/hello.png'
import Smile from '../assets/smile.png'

const Total = styled.div`
    position: relative;
`

const Box = styled.div`
    position: relative;
    width: 295px;
    height: 144px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    p {
        z-index: 1000;
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
        z-index: 1;
    }
`
const Name = styled.div`
    /* background: #ffffff;
    border: 1px solid #0066ff; */
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 51px;
    bottom: 46px;
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

const Say: React.FC<SayProps> = ({line1, line2, num, eyes, under}) => {
    return (
        <>
            <Total>
                <Box>
                    <img src={Union} alt=""></img>
                    <p>{line1}</p>
                    {num && <p>{line2}</p>}
                    <Name>
                        <p>블럭이</p>
                    </Name>
                </Box>
                {/* <Name>
                    <p>블럭이</p>
                </Name> */}
            </Total>
            <Img>{eyes ? <img src={Open} alt="" /> : <img src={Smile} alt="" />}</Img>
            <Under>
                <p>{under}</p>
            </Under>
        </>
    )
}

export default Say
