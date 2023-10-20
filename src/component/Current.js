const Current = ({data, quarter, setQuarter}) => {
    const inComeList = data.filter((it) => it.isIncome === true); // 수입 리스트
    const outgoingsList = data.filter((it) => it.isIncome !== true); // 지출 리스트

    // 수입 총액
    const inCome = inComeList.reduce((acc, cur) => {
        acc += cur.cost;
        return acc;
    },0);

    // 지출 총액
    const outgoings = outgoingsList.reduce((acc, cur) => {
        acc += cur.cost;
        return acc;
    },0);

    const onChangeQuarter = (e) => {
        setQuarter(Number(e.target.value))
    }

    return (
        <div className="Current container mx-auto my-10">
            <div className="flex py-5">
                <h4 className="text-2xl grow">📆 {quarter}분기 가계 현황</h4>
                <select className="w-1/6 border-solid border-2" onChange={onChangeQuarter}>
                    <option value={1}>1분기</option>
                    <option value={2}>2분기</option>
                    <option value={3}>3분기</option>
                    <option value={4}>4분기</option>
                </select>
            </div>
            <div className="px-60 py-10 flex place-content-between border-solid border-2 text-xl">
                <div className="grid flex">
                    <div className="grid-cols-6 text-2xl">수입</div>
                    <div className="grid-cols-6">+ {inCome}원</div>
                </div>
                <div className="grid flex">
                    <div className="grid-cols-6 text-2xl">지출</div>
                    <div className="grid-cols-6">- {outgoings}원</div>
                </div>
            </div>
        </div>
    )
}

export default Current;