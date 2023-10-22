import { useEffect } from 'react';
import moment from 'moment';

const Editor = ({onChange,dateRef,contentRef,costRef,date,content,cost, isIncome}) => {
  useEffect(()=>{
    dateRef.current.value = moment(date).format('yyyy.MM.DD');
    contentRef.current.value = content;
    costRef.current.value = cost;
  },[]);

  return (
    <div className="container mx-auto w-9/12">
      <h4 className="text-2xl grow font-bold">📆 날짜 선택</h4>
      <div className="border-solid border-2 my-5 px-2 w-56 outline-none">
        <input 
          ref={dateRef}
          type="date"
          className='outline-none w-full text-center'
        />
      </div>
      <h4 className="text-2xl grow font-bold pt-5">🗒️내용</h4>
      <div className="border-solid border-2 my-5 w-full">
        <textarea 
          ref={contentRef}
          className="w-full h-60 resize-y px-2 pt-2 border-none outline-none" />
      </div>
      <h4 className="text-2xl grow font-bold pt-5">💰금액</h4>
      <div className="border-solid border-2 my-5 px-2 py-2 w-full">
        <div className='pt-2 px-2'>
          <label>
            <input 
              type="radio" 
              value={"income"}
              name="account"
              onChange={onChange}
              className="mr-1"
              checked={isIncome}
            /> 수입 </label>
          <label>
            <input 
              type="radio"
              name="account"
              value={"outgoings"}
              onChange={onChange}
              checked={!isIncome}
              className="ml-10 mr-1"
            /> 지출 </label>
        </div>
        <div className='pt-3 px-2'>
          <input 
            type="text"
            ref={costRef}
            className='border-solid border w-72 px-2'
            placeholder='금액을 입력하세요 (숫자로만 입력)'
          /> 원
        </div>
      </div>
    </div>
  )
}

export default Editor;