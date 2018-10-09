import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './Componentes/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
