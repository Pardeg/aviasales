import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Normalize} from "styled-normalize";

const Root = ()=>(
    <React.Fragment>
        <Normalize/>
        <App />
    </React.Fragment>
);

ReactDOM.render(
    <Root />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

