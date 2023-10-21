import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Button from '../component/Button';

const New = () => {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate("/", {replace : true});
    }

    return (<>
          <Header 
            leftChild={ <Button text={"< 뒤로가기"} onClick={goBack}/>}
            title={"Add Account"}
            rightChild = { <Button text={"등록하기"} /> }
          />
          <div className="container mx-auto pt-20 w-9/12">
            <h4 className="text-2xl grow font-bold">📆 날짜 선택</h4>
            <div className="border-solid border-2 my-5 px-2 w-fit">
              <input type="date" />
            </div>
            <h4 className="text-2xl grow font-bold pt-5">🗒️내용</h4>
            <div className="border-solid border-2 my-5 w-full">
              <textarea className="w-full h-60 resize-y px-2 pt-2 border-none outline-none" />
            </div>
            <h4 className="text-2xl grow font-bold pt-5">💰금액</h4>
            <div className="border-solid border-2 my-5 px-2 py-2 w-full">
              <div className='pt-2 px-2'>
                <input 
                  type="radio" 
                  value={"income"}
                  className="mr-1"
                /> 수입
                <input 
                  type="radio"
                  value={"outgoings"}
                  className="ml-10 mr-1"
                /> 지출
              </div>
              <div className='pt-3 px-2'>
                <input 
                  type="text"
                  className='border-solid border'
                  placeholder='금액을 입력하세요.'
                /> 원
              </div>
            </div>
          </div>
        </>
    )
}

export default New;