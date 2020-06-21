import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Funcionarios from './pages/Funcionarios';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Funcionarios} path="/funcionarios" />
        </BrowserRouter>
    )
}
export default Routes;