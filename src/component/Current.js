import { useEffect, useState } from 'react';
import moment from 'moment';

const Current = ({data, quarter, setQuarter}) => {
    const quarterData = data.filter((it) => moment(it.date).quarter() === quarter);
    const [inCome, setIncome] = useState(0);
    const [outgoings, setOutgoings] = useState(0);

    useEffect(()=>{
        const inComeList    = quarterData.filter((it) => it.isIncome === true);
        const outgoingsList = quarterData.filter((it) => it.isIncome !== true);

        setIncome( inComeList.reduce((acc, cur) => {
                acc += cur.cost;
                return acc;
            },0).toLocaleString()
        );
        setOutgoings( outgoingsList.reduce((acc, cur) => {
            acc += cur.cost;
            return acc;
        },0).toLocaleString()
    );
    },[quarter]);

    const onChangeQuarter = (e) => {
        setQuarter(Number(e.target.value))
    }

    return (
        <div className="Current container mx-auto w-9/12">
            <div className="flex">
                <h4 className="text-2xl grow font-bold">📆 {quarter}분기 가계 현황</h4>
                <select className="w-1/6 border-solid border-2 text-center font-medium" onChange={onChangeQuarter}>
                    <option value={1}>1분기</option>
                    <option value={2}>2분기</option>
                    <option value={3}>3분기</option>
                    <option value={4}>4분기</option>
                </select>
            </div>
            <div className="px-60 my-5 flex place-content-between border-solid border-2 text-xl">
                <div className="my-5 text-center w-3/6">
                    <div className="text-2xl font-semibold">수입</div>
                    <div className="text-xl pt-5 ">➕ {inCome} 원</div>
                </div>
                <div className="my-5 text-center w-3/6">
                    <div className="text-2xl font-semibold">지출</div>
                    <div className="text-xl pt-5">➖ {outgoings} 원</div>
                </div>
            </div>
        </div>
    )
}

export default Current;