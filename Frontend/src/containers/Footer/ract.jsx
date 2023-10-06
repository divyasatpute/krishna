import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './Footer.jsx'


ReactDOM.render(<ContactForm />, document.getElementById('container'));

var ractive = new Ractive({
    el: '#container',
    template: '#template',
    data: {}
  });