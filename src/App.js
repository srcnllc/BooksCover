import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './redux/actions';
import { useEffect } from 'react';


function App() {
  const data = useSelector((state)=>state.data);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className="App ">
      <div className="content">
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
      </Routes>
  </div>
    </div>
  );
}


export default App;
