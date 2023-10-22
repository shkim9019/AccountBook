import { useNavigate, useParams } from 'react-router-dom';
import Button from '../component/Button';
import Header from '../component/Header';
import Editor from '../component/Editor';
import { useContext, useRef, useState } from 'react';
import { dataContext } from '../App';
import moment from 'moment';

const Edit = ({onEdit}) => {
  const { id } = useParams();
  const data = useContext(dataContext).filter((it) => String(it.id) === String(id))[0];
  console.log("???????????", data)

  const navigate = useNavigate();
  const [isIncome, setIsIncome] = useState(data.isIncome);

  const dateRef = useRef();
  const costRef = useRef();
  const contentRef = useRef();
  
  const goBack = () => {
      navigate(-1);
  }

  const changeIsIncome = (e) => {
    const value = e.target.value;
    value = value === 1 ? true: false;
    setIsIncome(value);
  }

  const onClickEdit = () => {
    const editItem = {
      id: id,
      date: moment(dateRef.current.value).format('yyyy.MM.DD'),
      cost: costRef.current.value,
      content:  contentRef.current.value,
      isIncome: isIncome
    }
    console.log('>>>>>> ',editItem)
    onEdit(editItem);
    navigate("/", {replace:true})
  }

  return  (
    <>
      <Header 
        leftChild={ 
          <Button 
            text={"< 뒤로가기"} 
            onClick={goBack}
            name={"w-56 h-12 bg-indigo-200"}
            />
        }
        title={"Modify Account"}
        rightChild = { 
          <Button 
            text={"수정하기"} 
            onClick={onClickEdit}
            name={"w-56 h-12 bg-indigo-300"}
          />
        }
      />
      <Editor 
        changeIsIncome={changeIsIncome}
        dateRef={dateRef}
        contentRef={contentRef}
        costRef={costRef}
        date={data.date}
        content={data.content}
        cost={data.cost}
      />
    </>
  )
}

export default Edit;