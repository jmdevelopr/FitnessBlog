import { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import '../styles/css/Articles.min.css';

class Admin extends Component {

  handleAdd = article => { 
    this.props.firestore.collection('articles').add({
      title: article.title,
      subtext: article.subtext,
      author: article.author
    }).then(() => {
        console.log("Article added to 'articles'.")
        this.handleDelete(article.id)
    }).then(() => console.log("Article deleted from 'pending'."));
  }

  handleAddTest = (e) => { 
    this.props.firestore.collection('pending').add({
      title: 'A complete push-up tutorial for beginners.',
      subtext: 'Learn how to do push-ups and not overdo yourself!',
      author: 'Kuba Makuch'
    }).then(data => console.log(data));
  }

  handleDelete = id => {
    this.props.firestore.collection('pending').doc(id).delete()
    .then(data => console.log("Document deleted."));
  }

  render() {
    return (
      <div className="Blog">
        <div className="articles-section">
          <h2>Admin</h2>
          <button 
            onClick={this.handleAddTest}
          >+</button>
          <div className="articles">
            {this.props.pending && this.props.pending.map(article => 
              <div className="article" key={article.id}>
                <input type="button" onClick={() => this.handleAdd(article)} value="Add to page"/>
                <input type="button" onClick={() => this.handleDelete(article.id)} value="Delete"/>
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
)(Admin)