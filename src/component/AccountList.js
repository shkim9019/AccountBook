import { useNavigate } from 'react-router-dom';
import AccountListItem from './AccountListItem';
import Button from "./Button";
import moment from "moment";

const AccountList = ({data, quarter, onDelete}) => {
    const copyData = data.filter((it) => moment(it.date).quarter() === quarter);
    const navigate = useNavigate();
    
    const goNewPage = () => {
        navigate("/new")
    }

    return (
        <div className="AccountList container mx-auto pt-20 w-9/12">
            <div className="flex">
                <h4 className="text-2xl grow font-bold">📋{quarter}분기 내역</h4>
                <Button 
                    text={"추가"} 
                    onClick={goNewPage}
                    name={"w-24 bg-indigo-300"}
                />
            </div>
            <div className="border-solid border-2 my-5 px-5">
                <div className="grid grid-cols-5 flex my-2 text-center font-semibold">
                    <div className="text-xl">날짜</div>
                    <div className="text-xl">내용</div>
                    <div className="text-xl">금액</div>
                    <div className="text-xl">수정</div>
                    <div className="text-xl">삭제</div>
                </div>
                <hr />
                { copyData.length > 0 ? 
                    copyData.map(
                        (it) => <AccountListItem {...it} key={it.id} onDelete={onDelete}/> 
                    )
                    : ( <div className=" my-5 text-center text-lg">내역이 없습니다.</div> )
                }
            </div>
        </div>
    )
}

export default AccountList;