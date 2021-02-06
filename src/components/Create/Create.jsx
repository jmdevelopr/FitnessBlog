import { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Cookies from 'universal-cookie';
import '../../styles/css/Create.min.css';

class Create extends Component {

    state = {
        title: '',
        subtext: '',
        author: ''
    }

    cookies = new Cookies();

    // addArticle = (title, subtext, author) => this.props.firestore.collection('pending').add({
    //     title,
    //     subtext,
    //     author
    // }).then(() => console.log('Article added.'));

    addArticle = (title, subtext, author) => {
        const currentCart = this.cookies.get('cart') || [];
        this.cookies.set('cart', [...currentCart, {title, subtext, author}]);
        console.log('Added to cart.');
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("adding...")
        this.addArticle(this.state.title, this.state.subtext, this.state.author);
        this.props.history.push('/');
    }

    render() {
        return (
            <form className="Create" onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" 
                value={this.state.title} 
                onChange={e => this.setState({ title: e.target.value })}
              />
              
              <label htmlFor="subtxt">Subtext</label>
              <input type="text" name="subtxt" 
                value={this.state.subtext} 
                onChange={e => this.setState({ subtext: e.target.value })}
              />
              
              <label htmlFor="author">Author</label>
              <input type="text" name="author" 
                value={this.state.author} 
                onChange={e => this.setState({ author: e.target.value })}
              />
              
              <button>Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
  return { 
    articles: state.firestoreReducer.ordered.articles
  }
}

export default compose(
  firestoreConnect(() => ['articles']),
  connect(mapStateToProps),
  withRouter
)(Create)