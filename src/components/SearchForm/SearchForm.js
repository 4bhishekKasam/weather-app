import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import "./SearchForm.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.props.getWeather} className="container-form">
          <Input name="city" className="search-form-item" placeholder="City" />
          <Input
            name="country"
            className="search-form-item"
            placeholder="Country"
          />
          <Button className="search-form-btn" content="Get Weather" />
        </form>
      </div>
    );
  }
}
