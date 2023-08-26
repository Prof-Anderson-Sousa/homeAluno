import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teste from './pages/teste/teste';
import Login from './pages/login/login';
import homeAluno from './pages/home/homeAluno';
import homeProf from './pages/home/homeProf';

class AppRouter extends Component { 
    render() {
        return(
            <div class="body">
                <Router>
                    <Routes>
                        <Route path='/' Component={Teste} ></Route>
                        <Route path='/teste' Component={Teste} ></Route> 
                        <Route path='/login' Component={Login} ></Route>  
                        <Route path='/home-aluno' Component={homeAluno} ></Route>
                        <Route path='/home-prof' Component={homeProf} ></Route>
                    </Routes>    
                
                </Router> 
            </div>
        )
    }
}

export default AppRouter;