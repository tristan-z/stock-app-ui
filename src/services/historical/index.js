     /* import React, { Component } from 'react'

    class App extends Component {
      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }
    }*/

    const HistoricalService = {
        getHistoricalData: function(stockSymbol) {
            fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .catch(console.log)
        },
    };
    
    export default HistoricalService;