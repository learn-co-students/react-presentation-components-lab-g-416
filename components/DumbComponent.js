const React = require('react');

class DumbComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const mood = this.getState();
    if(mood === 'happy'){
      this.state = 'sad'
    } else {
      this.state = 'happy'
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }
}