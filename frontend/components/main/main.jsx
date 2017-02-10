import React from 'react';

import ImageContainer from '../images/image-container';
import Sidebar from '../sidebar/sidebar';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <ImageContainer tab={this.props.tab}/>
      </div>
    )
  }
}

export default Main;
