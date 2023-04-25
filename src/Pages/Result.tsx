import {useEffect} from 'react'
import Header from '../Components/Header'
import styled from 'styled-components'

const Top = styled.div`
    text-align: center;
`
const Name = styled.div`
    p {
        color: rgba(0, 0, 0, 0.25);
        font-weight: 700;
        font-size: 24px;
    }
`
const Line = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 30px;
`
const Charteristic = styled.div`
    height: 30px;
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: ${(props: any) => props.color};
    padding-bottom: 5px;
    width: 120px;
`
const Title = styled.div`
    text-align: center;
    margin-top: 40px;
    p {
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
        font-size: 24px;
    }
`
const Diary = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    height: 392px;
    background-color: aliceblue;
`
const Detail = styled.div`
    margin-left: 42px;
    margin-right: 42px;
    margin-top: 40px;
    span {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        /* or 175% */

        letter-spacing: 0.2em;

        color: #808080;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 19px;
    width: 60px;
    height: 74px;
    background: linear-gradient(182.99deg, #0066ff -0.15%, #77e47c 98.36%);
    border-radius: 5px;
    p {
        margin: 5px;
    }
`
const Num = styled.p`
    color: #ffffff;
    font-weight: 700;
    font-size: 32px;
`

const Word = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: white;
`
const SemiTitle = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    align-items: center;
    letter-spacing: 0.1em;
    color: #808080;
`
const White = styled.div`
    color: #0066ff;
    border: 1px solid #0066ff;
    border-radius: 30px;
    background: #ffffff;
    padding: 0px 11px;
`
const Blue = styled.div`
    color: #0066ff;
    background: rgba(0, 102, 255, 0.05);
    border-radius: 30px;
    padding: 0px 16px;
`
const Block = styled.div`
    height: 30px;
    width: 100%;
`
const Btn = styled.div`
    background-color: ${({theme}: any) => theme.color.main};
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    p {
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
    }
`

function Result() {
    const MY_NAME = localStorage.getItem('name')
    const date = new Date()
    const year = date.getFullYear() + 10
    const month = date.getMonth() + 1
    const day = date.getDate()
    const future = `${year}년 ${month}월 ${day}일`

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const sendKaKao = () => {
        window.Kakao.Link.sendCustom({
            templateId: 93063, // 내가 만든 템플릿 아이디를 넣어주면 된다
        })
    }
    return (
        <>
            <Header name={future} backExist={false} xExist={true} path1="/" path2="/" />
            <Top>
                <Name>
                    <p>{MY_NAME} 선생님</p>
                </Name>
                <Line>
                    <Charteristic color="#0066FF" style={{background: 'rgba(0, 102, 255, 0.25)'}}>
                        <p># 책을 많이 읽어</p>
                    </Charteristic>
                    <Charteristic color="#0066FF" style={{background: 'rgba(0, 102, 255, 0.05)'}}>
                        <p># 설명을 잘해</p>
                    </Charteristic>
                </Line>
                <Line>
                    <Charteristic color="white" style={{background: '#0066FF'}}>
                        <p># 동생들을 좋아해</p>
                    </Charteristic>
                </Line>
            </Top>
            <Block></Block>
            <Title>
                <p>{MY_NAME}의 미래 일기</p>
            </Title>
            <Diary></Diary>
            <Detail>
                <span>
                    오늘 아침 학교 가서 한국어 수업 신나게 했다!🎉 학생들 질문에 대답하며 시간이 금방 지나갔어. 점심엔
                    선생님들이랑 맛집에서 즐거운 시간 보냈고🍴, 오후엔 한국 문화와 역사로 여행했다!✈️ 집에 와서 드라마로
                    힐링하고🍿, 내일 수업 준비 완료!👩‍🏫 내일도 화이팅해서 가르치고 배울 준비 완료!💪
                </span>
            </Detail>
            <Block></Block>
            <Title>
                <p>너는 이런 사람인거 같아</p>
            </Title>
            <Line>
                <Box>
                    <Num>1</Num>
                    <Word>예술형</Word>
                </Box>
                <Box>
                    <Num>2</Num>
                    <Word>탐구형</Word>
                </Box>
                <Box>
                    <Num>3</Num>
                    <Word>관습형</Word>
                </Box>
            </Line>
            <Block></Block>
            <Line>
                <SemiTitle>강점포인트</SemiTitle>
                <White>
                    <p># 키워드</p>
                </White>
                <Blue>
                    <p># 키워드</p>
                </Blue>
                <White>
                    <p># 키워드</p>
                </White>
            </Line>
            <Line>
                <SemiTitle>약점포인트</SemiTitle>
                <Blue>
                    <p># 키워드</p>
                </Blue>
                <White>
                    <p># 키워드</p>
                </White>
                <Blue>
                    <p># 키워드</p>
                </Blue>
            </Line>
            <Block></Block>
            <Block></Block>
            <Block></Block>
            <Btn onClick={sendKaKao}>
                <p>공유하기</p>
            </Btn>
        </>
    )
}
export default Result
