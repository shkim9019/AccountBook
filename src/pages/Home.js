import { useContext } from 'react';
import AccountList from '../component/AccountList';
import Current from '../component/Current';
import Header from '../component/Header';

const Home = ({quarter, setQuarter, onDelete}) => {
  return (<>
    <Header title={"Account Book"} />
    <Current quarter={quarter} setQuarter={setQuarter}/>
    <AccountList quarter={quarter} onDelete={onDelete}/>
    </>
  )
}

export default Home;