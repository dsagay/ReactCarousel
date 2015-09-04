var
	React = require('react'),
	data = require('../../../data/carousel.js');

	// App state
var state = {
  currentSlide: 0,
  data        : []
}
	 
var Carousel = React.createClass({
  render: function() {
    return (
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				  <div className="carousel">
					<Slides data={this.props.data} />
					<Pagination data={this.props.data} />
					<Controls />
				  </div>
			</div>
		</div>
	</div>
    );
  }
});



/*
var Carousel = React.createClass({
	getInitialState: function(){
		return {
			count: 0
		}
	},
	myCustomMethod: function(e){
		var count = this.state.count;
		count++;
		this.setState({
			count: count
		});

		e.preventDefault();
	},
	render: function() {
		return (
			<div className="app">
			<div className="carousel">
				<p onClick={this.myCustomMethod}>Hello World {this.state.count+10}</p>
			</div>
			</div>
		)
	}

});
*/
 
module.exports = Carousel;
