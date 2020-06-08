import React, { Component } from 'react';
import $ from 'jquery';
import NewCompTemplate from './Components/NewCompTemplate';

class App extends Component {

  // INITIALIZE SITE DATA
  constructor(props){
    super(props);
    this.state = {
      siteData: {}
    };
  }

  // ACCESS AND INIT
  getSiteData(){
    $.ajax({
      url:'/siteData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({siteData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  // WHEN MOUNT...
  componentDidMount(){
    this.getSiteData();
  }

  // WHAT OUR APP RENDERS...
  render() {
    return (
    <div className="App">
      <NewCompTemplate data={this.state.siteData.main}/>
    </div>
    );
  }
}

export default App;
