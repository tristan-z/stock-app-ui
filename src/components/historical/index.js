import React, { Component } from 'react'
import './style.css'
import {List} from '../common'

  class Historical extends Component {
    constructor(props) {
        super(props);
        this.state = {contacts: []};
      }
      componentDidMount() {
        /*fetch('http://localhost:8080/api/app/volume',
        {
          method: 'GET',
          mode: 'cors',
          headers: new Headers({'Access-Control-Allow-Origin': 'http://localhost:8080'})
        })
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)*/
    }
      render() {
        return (
            <div className="historical">
                <List data={this.state.contacts}/>
            </div>
          );
      }
    }

export default Historical