import Header from '../Components/Header'
import styled from 'styled-components'

const Top = styled.div`
    text-align: center;
`
const Name = styled.div`
    p {
        color: rgba(0, 0, 0, 0.25);
        font-weight: 700;
        font-size: 20px;
    }
`
const Line = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
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

function Result() {
    const date = new Date()
    const year = date.getFullYear() + 10
    const month = date.getMonth() + 1
    const day = date.getDate()
    const future = `${year}년 ${month}월 ${day}일`
    return (
        <>
            <Header name={future} backExist={true} xExist={true} path1="/home" path2="home" />
            <Top>
                <Name>
                    <p>김윤지 선생님</p>
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
            <Title>
                <p>윤지의 미래 일기</p>
            </Title>
            <Diary></Diary>
            <Detail>
                <span>
                    오늘 아침 학교 가서 한국어 수업 신나게 했다!🎉 학생들 질문에 대답하며 시간이 금방 지나갔어. 점심엔
                    선생님들이랑 맛집에서 즐거운 시간 보냈고🍴, 오후엔 한국 문화와 역사로 여행했다!✈️ 집에 와서 드라마로
                    힐링하고🍿, 내일 수업 준비 완료!👩‍🏫 내일도 화이팅해서 가르치고 배울 준비 완료!💪
                </span>
            </Detail>
            <Title>
                <p>너는 이런 사람인거 같아</p>
            </Title>
            <Title>
                <p>다른 직업이 궁금해?</p>
            </Title>
        </>
    )
}
export default Result
