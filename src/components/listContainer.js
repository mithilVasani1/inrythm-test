import React, {Component} from 'react';
import ListItem from './listItem';

class ListContainer extends Component {

  render() {
    const {data} = this.props;
    return (
     
        <div className="col ml-4">
          
          {data.map((e, i) => <span className="p-2" key={i}><ListItem Itemdata={e} /></span> )}
          
        </div>
      
    )
  }
};

export default ListContainer; 