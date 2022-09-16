//CSS imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//React imports
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Misc imports
import { UserProvider } from './UserContext';


//Component imports
import NavBar from './components/NavBar';

//Page Imports
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Invoices from './pages/Invoices';

export default function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

  const unsetUser = () => {
    localStorage.clear()
    setUser({
      id: null,
      isAdmin: null
    });
  };

  useEffect(()=>{
    console.log({ api: process.env.REACT_APP_API_URL})
    fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(typeof data._id !== "undefined"){
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        });
      }else{
        setUser({
          id: null, 
          isAdmin: null
        });
      };
    });
  },[]);

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/invoices" component={Invoices}/>
        </Switch>
      </Router>
    </UserProvider>
  );
}