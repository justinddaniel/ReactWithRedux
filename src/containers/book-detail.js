import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) { //often used to deal with initial state of null; prevents errors for this.props.book.title.
      return <div>Select a book to get started.</div>
    }
    return (
      <div>
       <h3>Details for:</h3>
       <div>{this.props.book.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook;
  }
}

export default connect(mapStateToProps)(BookDetail);
