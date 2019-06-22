
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import Edit from './componentes/edit'
import Create from './componentes/create'
import Show from './componentes/show'
import Appcss from './App.css'
import {BrowserRouter,Switch} from 'react-router-dom'

import RegisterServiceWorker from './registerServiceWorker'




ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}    />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
        </div>
    </Router>,
    document.getElementById('root')

)

//RegisterServiceWorker();
