import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Button from '../component/Button';
import { useRef, useState } from 'react';
import moment from 'moment';
import Editor from '../component/Editor';

const New = ({onCreate}) => {
    const navigate = useNavigate();
    const [isIncome, setIsIncome] = useState(true);
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

    const onClickCreate = () => {
      const newItem = {
        date: moment(dateRef.current.value).format('yyyy.MM.DD'),
        cost: costRef.current.value,
        content:  contentRef.current.value,
        isIncome: isIncome
      }
      onCreate(newItem);
      navigate("/", {replace:true})
    }

    return (<>
          <Header 
            leftChild={ 
              <Button 
                text={"< 뒤로가기"} 
                onClick={goBack}
                name={"w-56 h-12 bg-indigo-200"}
                />
            }
            title={"Add Account"}
            rightChild = { 
              <Button 
                text={"등록하기"} 
                onClick={onClickCreate}
                name={"w-56 h-12 bg-indigo-300"}
              />
            }
          />
          <Editor 
            changeIsIncome={changeIsIncome}
            dateRef={dateRef}
            contentRef={contentRef}
            costRef={costRef}
            date={""}
            content={""}
            cost={0}
            isIncome={isIncome}
          />
        </>
    )
}

export default New;