import Button from "./Button";

const AccountListItem = ({id, date, content, cost, onDelete, goEditPage}) => {
    const onClickDelete = () => {
        onDelete(id);
    }

    const onClickEdit = () => {
        goEditPage(id);
    }

    return (
        <div className="grid grid-cols-5 flex my-5 text-center text-lg">
            <div>{date}</div>
            <div className='text-left'>{content}</div>
            <div className='text-right w-9/12'>{cost.toLocaleString() + " 원"}</div>
            <Button 
                text={"수정"} 
                onClick={onClickEdit}
                name={"w-10/12 bg-indigo-300"}
            />
            <Button 
                text={"삭제"} 
                onClick={onClickDelete}
                name={"w-10/12 bg-indigo-200"}
            />
        </div>
    )
}

export default AccountListItem;