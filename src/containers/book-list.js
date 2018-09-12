import React, {Component} from 'react';
import { connect } from 'react-redux'; //import connect property from react-redux
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux'; //used to ensure action genrated by actioncreator flows through reducers;

class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        onClick={() => this.props.selectBook(book)}
        key={book.title}
        className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//container is a component that has direct access to the state produced by Redux
//React and Redux are two separate libraries. react-redux melds them together.
//only the most parent component that uses a particular state needs to connect to Redux.

function mapStateToProps(state) { //the "glue" between React and Redux
  return {
    books: state.books //whatever is returned is available to component as this.props
  };
}

//takes application state, whatever is returned will show up as props inside of BookList
//containers are link between React and Redux through the mapStateToProps function.


//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch); //allows dispatch to flow through reducers.
}

//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
//React-redux documentation is a good resource for connect function.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes a function and component, and produces a container. container is aware of the state in Redux.

//whenver our application state changes, the container will re-render.
//whenver the application state changes, the object assigned will change this.props.
