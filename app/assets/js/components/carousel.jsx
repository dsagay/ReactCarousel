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


var actions = {
  toggleNext: function() {
    console.log("something worked");
    var current = state.currentSlide;
	console.log(current +'current');
    var next = current + 1;
    if (next > state.data.length - 1) {
      next = 0;
    }
    state.currentSlide = next;
    render(state)
  },
  togglePrev: function() {
    console.log("something worked");
    var current = state.currentSlide;
    var prev = current - 1;
    if (prev < 0) {
      prev = state.data.length - 1;
    }
    state.currentSlide = prev;
    render(state);
  },
  toggleSlide: function(id) {
    console.log("something worked");
    var index = state.data.map(function (el) {
      return (
        el.id
      );
    });
    var currentIndex = index.indexOf(id);
    state.currentSlide = currentIndex;
    render(state);
  }
}

var Slides = React.createClass({
  render: function() {
    var slidesNodes = this.props.data.map(function (slideNode, index) {
    var isActive = state.currentSlide === index;
      return (
        <Slide active={isActive} key={slideNode.img} imagePath={slideNode.img} text={slideNode.caption} />
      );
    });
    return (
      <div className="slides">
        {slidesNodes}
      </div>
    );
  }
});

var Slide = React.createClass({
  render: function() {
  var classStr = 'slide';
  if (this.props.active) {
  classStr += ' slide--active';
  }

    return (
      <div className={classStr}>
        <img src={this.props.imagePath} alt={this.props.imageAlt} />
        <p>{this.props.text}</p>
      </div>
    );
  }
});

var Controls = React.createClass({
  togglePrev: function() {
    actions.togglePrev();
  },
  toggleNext: function() {
    actions.toggleNext();
  },
  render: function() {
    return (
      <div className="controls">
        <div className="toggle toggle--prev" onClick={this.togglePrev}>&#8592; </div>
        <div className="toggle toggle--next" onClick={this.toggleNext}>&#8594; </div>
      </div>
    );
  }
});

var Pagination = React.createClass({
  render: function() {
    var paginationNodes = this.props.data.map(function (paginationNode, index) {
      return (
        <Pager id={paginationNode.id} key={paginationNode.id} title={paginationNode.title}  />
      );
    });
    return (
      <div className="pagination">
        {paginationNodes}
      </div>
    );
  }
});

var Pager = React.createClass({
  toggleSlide: function() {
    actions.toggleSlide(this.props.id);
  },
  render: function() {
    return (
      <span className="pager" onClick={this.toggleSlide}>{this.props.title}</span>
    );
  }
});

var EmptyMessage = React.createClass({
  render: function() {
    return (
      <div className="empty-message">No Data</div>
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
