import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
//import * as actions from './actions';
import App from './components/app';

//  создаем хранилище
let store = createStore(reducer);
const {dispatch} = store;

//  функция обновляет counter
{ReactDom.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root'));}

