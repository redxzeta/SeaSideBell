import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHeroes } from "../actions/heroes";
export class Yeeet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroesList: ""
    };
  }
  static propTypes = {
    heroes: PropTypes.array.isRequired,
    getHeroes: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getHeroes();
  }

  render() {
    return (
      <div>
        {this.props.heroes.map((hero, index) => {
          return <h2 key={index}> {hero.name} </h2>;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  heroes: state.heroes.heroes
});

export default connect(mapStateToProps, { getHeroes })(Yeeet);
