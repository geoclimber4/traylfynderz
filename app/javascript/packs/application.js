/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react';
import ReactDom from 'react-dom';
// import '../components'
import SampleComponent from '../components/SampleComponent';
import App from '../components/App.jsx';


document.addEventListener('DOMContentLoaded', () => {
  // const container = document.body.appendChild(document.createElement('div'));
  // render(<SampleComponent/>, container);
  const container = document.getElementById('app');
  ReactDom.render(<App />, container);
});


