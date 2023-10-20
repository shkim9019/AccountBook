import Button from "./Button";
import moment from "moment";

const AccountList = ({data, quarter}) => {
    
    //Todo. data의 날짜가 해당 분기인것들만 filter해서 보여주기.
    data = data.filter((it) => moment(it.date).quarter() === quarter);


    return (
        <div className="AccountList container mx-auto py-20 ">
            <div className="flex px-1">
                <h4 className="text-2xl grow">📋{quarter}분기 내역</h4>
                <Button text={"+"} name={"w-24"}/>
            </div>
            <div className="border-solid border-2 my-5 px-5">
                <div className="grid grid-cols-5 flex my-5 text-center">
                    <div className="text-xl">날짜</div>
                    <div className="text-xl">내용</div>
                    <div className="text-xl">금액</div>
                    <div className="text-xl">수정</div>
                    <div className="text-xl">삭제</div>
                </div>
                { data.map((it) => 
                    <div className="grid grid-cols-5 flex my-5 text-center" key={it.id}>
                        <div>{it.date}</div>
                        <div>{it.content}</div>
                        <div>{it.cost}</div>
                        <Button text={"수정"}/>
                        <Button text={"삭제"}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AccountList;