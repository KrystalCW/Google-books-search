import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm) {
      API.searchBook(this.state.searchTerm)
        // .then(res => this.setState({ books: res.data }))
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                name="searchTerm"
                placeholder="Search here"
              />
              <FormBtn
                disabled={!(this.state.searchTerm)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-2" />
        </Row>
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
          {this.state.books.length ? (
              <ul>{this.state.books.data}</ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/saved">See saved books</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
