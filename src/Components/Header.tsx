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
    backExist: boolean
    xExist: boolean
    path1: string
    path2: string
}

const Header: React.FC<HeaderProps> = ({name, backExist, xExist, path1, path2}) => {
    const navigate = useNavigate()
    return (
        <>
            <Total>
                {backExist ? <Back onClick={() => navigate(path1)} src={back}></Back> : <Blank></Blank>}
                <p>{name}</p>
                {xExist ? <X onClick={() => navigate(path2)} src={x}></X> : <Blank></Blank>}
            </Total>
        </>
    )
}

export default Header
