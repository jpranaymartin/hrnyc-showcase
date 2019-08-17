import React from 'react';
import NestedGrid from './NestedGrid.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  getNumberRowsNeeded(){
    return Math.ceil(this.props.projects.length/3);
  }

  getDataRows(){
    let copy = this.props.projects.slice();
    const result = []
    let numberOfRows = this.getNumberRowsNeeded();
    console.log('numberOfRows: ', numberOfRows);

    while(numberOfRows > 0) {
      result.push( copy.slice(0, 3));
      copy = copy.splice(3)
      numberOfRows--;
    }
    console.log('result: ', result);
    return result;
  }

  render() {
    return (
      <div className="app-content">
        <h1>Hack Reactor-NYC Minimum Viable Product Talent Showcase</h1>
        <NestedGrid dataRows={this.getDataRows()}/>
      </div>
    )
  }
}