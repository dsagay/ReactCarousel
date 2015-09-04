
var
	React = require('react'),
	Carousel = require('./components/carousel.jsx'),
	data = require('../../data/carousel.js');
	 
//console.log(Slides);  

// App state
var state = {
  currentSlide: 0,
  data        : []
}

function render(state) {
  React.render(
    <Carousel data={state.data}/>, document.getElementById('app')
  );
}

render(state);

setTimeout(function() {
  state.data = data;
  render(state);
}, 1000) 




