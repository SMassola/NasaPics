import React from 'react';

import ImageContainer from '../images/image-container';
import Sidebar from '../sidebar/sidebar';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Sidebar />
        <ImageContainer />
      </div>
    )
  }
}

export default Main;
