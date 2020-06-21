import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Empresas from './pages/Empresas';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Empresas} path="/empresas" />
        </BrowserRouter>
    )
}
export default Routes;