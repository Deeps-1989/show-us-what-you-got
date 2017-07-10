import React from 'react';
import MenuContainer from './menuContainer';

class App extends React.Component {
    constructor(props) {
     super(props);
     // parse the json string into json object
     this.data = JSON.parse(this.props.data);
    }
    render() {
        return (
            <div>
              <MenuContainer details ={this.data}/>
            </div>
        );
    };
 };

 export default App;
