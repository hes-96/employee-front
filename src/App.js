import './App.css';
import Header from "./pages/header/Header.js"
import NoMatch from "./pages/noMatch/NoMatch.js"
import Dashboard from "./pages/dashboard/Dashboard.js"
import PostUser from "./pages/employee/PostUser.js"
import UpdateUser from "./pages/employee/UpdateUser.js"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Dashboard/> }></Route>
        <Route path="/employee" element={ <PostUser/> }></Route>
        <Route path="/employee/:id" element={ <UpdateUser/> }></Route>
        <Route path="*" element={ <NoMatch/> }></Route>
      </Routes>
    </>
  );
}

export default App;
