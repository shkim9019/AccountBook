import moment from 'moment';
import './App.css';
import React, { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import New from './pages/new';
import Edit from './pages/Edit';
import Home from './pages/Home';

const mockData = [
  {
    id:0,
    date: moment().subtract(4,'M').format('yyyy.MM.DD'),
    cost:100000, 
    content : "장보러 가기",
    isIncome: false
  },
  {
    id:1,
    date: moment().format('yyyy.MM.DD'),
    cost:5000000,
    content : "월급",
    isIncome: true
  },
  {
    id:2,
    date: moment().subtract(4,'D').format('yyyy.MM.DD'),
    cost:200000,
    content : "운동하기",
    isIncome: false
  },
  {
    id:3,
    date: moment().add(1,'M').format('yyyy.MM.DD'),
    cost:12000,
    content : "밥먹기",
    isIncome: false
  },
  {
    id:4,
    date: moment().add(1,'M').format('yyyy.MM.DD'),
    cost:300000,
    content : "밥먹기222",
    isIncome: false
  },
]

export const dataContext = React.createContext();

function App() {
  const [data, setData] = useState(mockData); // 가계 데이터
  const [quarter, setQuarter] = useState(1);  // 분기 //moment().quarter();
  const idRef = useRef(5);

  const onDelete = (targetId) => {
    setData(data.filter((it) => it.id !== targetId));
  }

  const onCreate = (target) => {
    const newItem = {
      id: idRef.current,
      date: target.date,
      cost: target.cost,
      content:  target.content,
      isIncome: target.isIncome
    }

    setData([newItem, ...data]);
    idRef.current +=1;
  }

  const onEdit = (target) => {
    const editItem = {
      id: Number(target.id),
      date:target.date,
      cost: Number(target.cost),
      content:target.content,
      isIncome: target.isIncome
    }

    setData(data.map((it)=> String(it.id) === String(target.id) ? {...editItem}:it));
  }

  return (
    <dataContext.Provider value={data}>
      <div className="container mx-auto">
        <Routes>
          <Route path='/' 
                element={
                  <Home quarter={quarter} setQuarter={setQuarter} onDelete={onDelete}  />
                }/>
          <Route path='/new' element={<New onCreate={onCreate}/>}/>
          <Route path='/edit/:id' element={<Edit onEdit={onEdit} />}/>
        </Routes>

        {/* <Header title={"Account Book"} />
        <Current data={data} quarter={quarter} setQuarter={setQuarter}/>
        <AccountList data={data} quarter={quarter} onDelete={onDelete}/> */}
      </div>
    </dataContext.Provider>
  );
}

export default App;
