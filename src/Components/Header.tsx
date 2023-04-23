import React from 'react'
import back from '../assets/Back.png'
import x from '../assets/X.png'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Total = styled.div`
    height: 72px;
    display: flex;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
    p {
        font-weight: 600;
        font-size: 24px;
    }
`
const Back = styled.img`
    width: 24px;
    height: 24px;
`
const X = styled.img`
    width: 24px;
    height: 24px;
`
const Blank = styled.div`
    width: 24px;
    height: 24px;
`

type HeaderProps = {
    name: string
    xExist: boolean
    path: string
}

const Header: React.FC<HeaderProps> = ({name, xExist, path}) => {
    const navigate = useNavigate()
    return (
        <>
            <Total>
                <Back onClick={() => navigate(-1)} src={back}></Back>
                <p>{name}</p>
                {xExist ? <X onClick={() => navigate(path)} src={x}></X> : <Blank></Blank>}
            </Total>
        </>
    )
}

export default Header
