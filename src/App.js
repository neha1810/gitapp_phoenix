import React from 'react';
import { connect } from 'react-redux';
import SearchBox from "../src/Components/Molecules/SearchBox";
import Cards from "../src/Components/Molecules/Cards";
import { getGitData } from "../src/actions/gitData.action"

class App extends React.Component {
  onChangeHandler = (e) => {
    this.props.getGitData(e.target.value)
  }
  render() {
    return (
      <div className="App" id="app">
        <div className="title">Git Repo App</div>
        <SearchBox onChange={this.onChangeHandler} />
        <Cards gitdata={this.props && this.props.gitdata && this.props.gitdata.items && this.props.gitdata.items} />
      </div>
    );
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    getGitData: (data) => dispatch(getGitData(data))
  }

}
const mapStatetoProps = state => {
  return {
    gitdata: state.gitDataReducer.gitdata
  }

}
export default connect(mapStatetoProps, mapDispatchtoProps)(App);
