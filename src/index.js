import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '../node_modules/jquery-ui/themes/base/all.css'
import '../node_modules/jquery/dist/jquery.min'
import '../node_modules/jquery-ui/ui/widgets/slider'
import './index.css'

import * as serviceWorker from './serviceWorker';


import App from "./app/layouts/App";

const root = document.getElementById('root');

ReactDOM.render( <App/>, root);

serviceWorker.register();




