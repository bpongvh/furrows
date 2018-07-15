import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../scss/styles.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

library.add(faCheckCircle);

ReactDOM.render(<App />, document.getElementById('furrows'));
registerServiceWorker();
