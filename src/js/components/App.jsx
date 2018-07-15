import { hot } from 'react-hot-loader';
import React from 'react';
import V8chLogo from './V8chLogo';

const App = () => (
  <div className="App">
    <header>
      <V8chLogo className="v8ch-logo" />
      <h1>
        Furrows
      </h1>
    </header>
    <main>
      <p>
        A React app boilerplate extension of&nbsp;
        <a href="https://github.com/facebook/create-react-app">
          Create React App
        </a>
        &nbsp;for V8CH, with extras:
      </p>
      <ul className="checklist">
        <li>
          <a href="https://sass-lang.com/">
            Sass
          </a>
          &nbsp;integration
        </li>
        <li>
          <a href="https://github.com/FortAwesome/react-fontawesome">
            React Fontawesome:
          </a>
          &nbsp;Fontawesome 5 built into a React component
        </li>
      </ul>
    </main>
  </div>
);

export default hot(module)(App);
