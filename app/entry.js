import a from './module1';
import * as styles from './style.css';
import './index.html';

import angular  from 'angular';
import example from './example_module/ExampleModule';

const app =  angular.module('app',['example']);
