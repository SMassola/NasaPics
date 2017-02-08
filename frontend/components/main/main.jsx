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
        <ImageContainer />
      </div>
    )
  }
}

export default Main;
