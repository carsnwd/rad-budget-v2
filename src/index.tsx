/* @refresh reload */
import { render } from 'solid-js/web';
import config from "./assets/config.json"
import { FirebaseProvider } from 'solid-firebase';

import './index.css';
import App from './App';

render(() => <FirebaseProvider config={config}><App /></FirebaseProvider>, document.getElementById('root') as HTMLElement);
