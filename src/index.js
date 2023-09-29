import './style.css';
import Logo from './images/logo.png';

import {buildHomePage} from  './script.js';
import {homeBillboard} from './script.js';

const logo = new Image();
logo.src = Logo;

homeBillboard.appendChild(logo);

buildHomePage();