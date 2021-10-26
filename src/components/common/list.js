import React, { Component } from 'react'

  class List extends Component {
    constructor(props) {
        super(props);
      }
      render() {
        return (
            <ul>
                {this.props.data.map(function(item, index){
                    return <li key={index}>{item.name}</li>;
                })}
            </ul>    
          );
      }
    }

export default List