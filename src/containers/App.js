import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./index.css";

import { setSearchField } from "../action";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}


class App extends Component {
  constructor() {
    super();
    //state is simply an object "An object thaat describes your application"
    this.state = {
      robots: [],
      //searchfield: " "
    };
  }

  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  /*onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };*/

  render() {
    const { robots, /*searchfield*/ } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? 
      <h1>Loading</h1>
     :(
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobot} />
          </ErrorBoundry>
        </Scroll>
        
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
