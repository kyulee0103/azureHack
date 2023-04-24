import styled from 'styled-components'
// import Avatar from '../../assets/Avatar.png'
import Options from '../../assets/Options.png'
import Back from '../../assets/Back.png'
import {useNavigate} from 'react-router-dom'

const Total = styled.div`
    width: 100%;
    /* background-color: red; */
    height: 65px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.95px 2.95px 3.6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    background-color: white;
`

const GoBack = styled.div`
    img {
        width: 30px;
        height: 30px;
    }
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    /* background-color: red; */
`
const Name = styled.p`
    font-size: 22px;
    font-weight: 700;
`
const Option = styled.div`
    img {
        width: 24px;
        height: 24px;
        visibility: hidden;
    }
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
`

function ChatHeader(props: any) {
    const navigate = useNavigate()
    const onClick = () => {
        navigate(-1)
    }
    return (
        <Total>
            <GoBack onClick={onClick}>
                <img src={Back} alt="" />
            </GoBack>
            <Name>{props.name}</Name>
            <Option>
                <img src={Options} alt="" />
            </Option>
        </Total>
    )
}

export default ChatHeader
