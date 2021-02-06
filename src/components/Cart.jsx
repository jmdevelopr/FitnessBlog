import { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Cookies from 'universal-cookie';
import '../styles/css/Articles.min.css';

class Cart extends Component {

  cookies = new Cookies();
  cart = this.cookies.get('cart');

  handleAdd = (article) => { 
    this.props.firestore.collection('pending').add({
      title: article.title,
      subtext: article.subtext,
      author: article.author
    }).then(data => console.log("Article added to 'pending'."));
    this.handleDelete(article.title)
  }

  handleDelete = title => {
    this.cart = this.cart.filter(item => item.title !== title);
    this.cookies.set('cart', this.cart);
    console.log('Item deleted');
    console.log(this.cart)
  }

  render() {
    return (
      <div className="Blog">
        <div className="articles-section">
          <h2>Cart</h2>
          <div className="articles">
            {this.cart && this.cart.map((article, id) => 
              <div className="article" key={id}>
                <input type="button" onClick={() => this.handleAdd(article)} value="Add to admin"/>
                <input type="button" onClick={() => this.handleDelete(article.title)} value="Delete"/>
                <div className="pic"></div>
                <h4 className="title">{article.title}</h4>
                <p className="subtext">{article.subtext}</p>
                <p className="author">By {article.author}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    pending: state.firestoreReducer.ordered.pending
  }
}

export default compose(
  firestoreConnect(() => ['pending']),
  connect(mapStateToProps)
)(Cart)