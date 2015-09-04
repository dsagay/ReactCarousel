
var
	React = require('react'),
	Carousel = require('./components/carousel.jsx'),
	data = require('../../data/carousel.js');


var render = function() {
  React.render(
    <Carousel/>, document.getElementById('app')
  );
}

render(); 




