import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import SearchBar from './components/searchbar';
import {actionFetchData} from './actions/index';
import ListContainer from './components/listContainer';


class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {error: ''};
  }

  onSearch = (searchText) => {

    searchText.length === 0 ? this.setState({error: 'Enter a valid Input '}) : (this.setState({error: ''}), this.props.actionFetchData(searchText));
  
  };

  render() {

    return (
     <div className="container-fluid bg-light">
      
          
          <div className="d-flex justify-content-center">
            <div className="p-2">
              <SearchBar
                search={this.onSearch}
              /> 
              {
                this.state.error !== '' ? <div className="mt-2 alert alert-danger" role="alert" >{this.state.error}</div>  : null
              } 
              <p className="text-center">Results</p>
            </div>
          </div>
        

        <div className="row bg-light"> 
          
        {this.props.data.length !== 0 &&
        <ListContainer
          data={this.props.data}
        />
        }

        </div>    
     </div> 
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.apidata.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({actionFetchData}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
