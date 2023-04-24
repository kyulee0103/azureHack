import {useState} from 'react'
import Header from '../../Components/Header'
import styled from 'styled-components'
import axios from 'axios'
import {useCookies} from 'react-cookie'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 52px;
    height: 100px;
`
const Name = styled.label`
    margin-top: 0;
    margin-bottom: 8px;
    color: #000000;
    font-weight: 700;
    font-size: 16px;
    opacity: 0.4;
`
const Btn = styled.button`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${({theme}: any) => theme.color.main};
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    p {
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
    }
`

const Form = styled.form`
    /* overflow: scroll;
    margin-bottom: 50px; */
    margin-top: 10px;
`

const Btn2 = styled.button`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #c4c4c4;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    p {
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
    }
`
const Input = styled.input`
    height: 48px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 99px;
    color: #000000;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    border: 0px;
    width: 100%;
    &:focus {
        outline: 0;
        border: 2px solid ${({theme}: any) => theme.color.main};
    }
    &::placeholder {
        color: #00000026;
    }
`
const Line = styled.div`
    display: flex;
`
const Unclicked = styled.div`
    border: 1px solid #000000;
    border-radius: 99px;
    width: 48px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    p {
        color: #000000;
        font-weight: 700;
        font-size: 20px;
    }
`
const Clicked = styled.div`
    border: 1px solid #000000;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 99px;
    width: 48px;
    height: 44px;
    display: flex;
    justify-content: center;
    background-color: ${({theme}: any) => theme.color.sub};
    align-items: center;
    p {
        color: #000000;
        font-weight: 700;
        font-size: 20px;
    }
`

const MBTIBox = styled.div`
    width: 90px;
    border: 1px solid #000000;
    border-radius: 99px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: rgba(0, 0, 0, 0.15);
        font-weight: 700;
        font-size: 20px;
    }
`

const Contents = styled.div`
    margin-bottom: 50px;
`

function Register() {
    const [nickname, setNickName] = useState('')
    const [cookies, setCookie] = useCookies(['token'])
    console.log(cookies)

    const [gender, setGender] = useState<string>()
    const [grade, setGrade] = useState<number>()

    const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickName(e.target.value)
    }

    const onClickGender = (gender: string) => {
        setGender(gender)
    }
    const onClickGrade = (grade: number) => {
        setGrade(grade)
    }
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        axios({
            method: 'put',
            url: 'http://43.201.208.224:3000/user/profile',
            data: {
                name: 'janghan',
                phone: '123-456-789',
                birthday: '02-01-03',
                mbti: '나도몰라',
                gender: 'male',
                school: '한국대학교',
                grade: 3,
            },
        })
            .then(function (response) {
                console.log(response)
            })
            .then(function (error) {
                console.log(error)
            })
    }
    return (
        <>
            <Header name="회원 정보 입력" xExist={false} path1="" path2="" backExist={false} />
            <Form autoComplete="off" onSubmit={onSubmit}>
                <Contents>
                    <Box>
                        <Name htmlFor="nickname">닉네임</Name>
                        <Input
                            onChange={onChangeNickName}
                            value={nickname}
                            id="nickname"
                            placeholder="불리고 싶은 이름"
                            required
                        ></Input>
                    </Box>
                    {/* <Box>
                        <Name>생년월일</Name>
                    </Box> */}
                    <Box>
                        <Name>성별</Name>
                        <Line>
                            {gender === 'male' ? (
                                <Clicked>
                                    <p>남</p>
                                </Clicked>
                            ) : (
                                <Unclicked onClick={() => onClickGender('male')}>
                                    <p>남</p>
                                </Unclicked>
                            )}
                            {gender === 'female' ? (
                                <Clicked>
                                    <p>여</p>
                                </Clicked>
                            ) : (
                                <Unclicked onClick={() => onClickGender('female')}>
                                    <p>여</p>
                                </Unclicked>
                            )}
                        </Line>
                    </Box>
                    <Box>
                        <Name>MBTI</Name>
                        <MBTIBox>
                            <p>MBTI</p>
                        </MBTIBox>
                    </Box>
                    <Box>
                        <Name>학교</Name>
                        <Input placeholder="학교 이름"></Input>
                    </Box>
                    <Box>
                        <Name>학년</Name>
                        <Line>
                            {grade === 1 ? (
                                <Clicked>
                                    <p>1</p>
                                </Clicked>
                            ) : (
                                <Unclicked onClick={() => onClickGrade(1)}>
                                    <p>1</p>
                                </Unclicked>
                            )}
                            {grade === 2 ? (
                                <Clicked>
                                    <p>2</p>
                                </Clicked>
                            ) : (
                                <Unclicked onClick={() => onClickGrade(2)}>
                                    <p>2</p>
                                </Unclicked>
                            )}
                            {grade === 3 ? (
                                <Clicked>
                                    <p>3</p>
                                </Clicked>
                            ) : (
                                <Unclicked onClick={() => onClickGrade(3)}>
                                    <p>3</p>
                                </Unclicked>
                            )}
                        </Line>
                    </Box>
                </Contents>
                {1 ? (
                    <Btn type="submit">
                        <p>완료!</p>
                    </Btn>
                ) : (
                    <Btn2 disabled>
                        <p>정보를 정확히 입력해줘!</p>
                    </Btn2>
                )}
            </Form>
        </>
    )
}
export default Register
