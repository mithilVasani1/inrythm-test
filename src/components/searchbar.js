import React, {Component} from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: ''
    };
  }

  render() {
    return (

      <div className="align-self-center">
        <span className="p-2">
        <input
          value={this.state.searchTxt}
          onChange={e => this.setState({searchTxt: e.target.value})}
        />
        </span>
        <span className="p-2">
        <button
          className="btn btn-info btn-sm"
          onClick={() => this.props.search(this.state.searchTxt)}
        > Submit
        </button>
        </span>
      </div>
    );
  }
}

export default SearchBar;