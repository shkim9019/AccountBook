import AccountList from '../component/AccountList';
import Current from '../component/Current';
import Header from '../component/Header';

const Home = ({data, quarter, setQuarter, onDelete}) => {
  return (<>
    <Header title={"Account Book"} />
    <Current data={data} quarter={quarter} setQuarter={setQuarter}/>
    <AccountList data={data} quarter={quarter} onDelete={onDelete}/>
    </>
  )
}

export default Home;