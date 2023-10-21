import moment from 'moment';
import './App.css';
import AccountList from './component/AccountList';
import Current from './component/Current';
import Header from './component/Header';
import React, { useState } from 'react';
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

// export const dataContext = React.createContext();

function App() {
  const [data, setData] = useState(mockData); // 가계 데이터
  const [quarter, setQuarter] = useState(1);  // 분기 //moment().quarter();

  const onDelete = (targetId) => {
    setData(data.filter((it) => it.id !== targetId));
  }

  return (
    <div className="container mx-auto">
      <Routes>
        <Route path='/' element={<Home data={data} quarter={quarter} setQuarter={setQuarter} onDelete={onDelete}/>}/>
        <Route path='/new' element={<New />}/>
        <Route path='/edit/:id' element={<Edit />}/>
      </Routes>

      {/* <Header title={"Account Book"} />
      <Current data={data} quarter={quarter} setQuarter={setQuarter}/>
      <AccountList data={data} quarter={quarter} onDelete={onDelete}/> */}
    </div>
  );
}

export default App;
