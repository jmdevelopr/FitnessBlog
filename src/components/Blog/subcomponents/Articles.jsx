import { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import '../../../styles/css/Articles.min.css';

class Articles extends Component {

  handleAdd = () => { 
    this.props.firestore.collection('articles').add({
      title: 'A complete push-up tutorial for beginners.',
      subtext: 'Learn how to do push-ups and not overdo yourself!',
      author: 'Kuba Makuch'
    }).then(() => console.log("Test article added."));
  }

  handleDelete = id => {
    this.props.firestore.collection('articles').doc(id).delete()
    .then(data => console.log("Document deleted."));
  }

  render() {
    return (
      <div className="articles-section">
        <h2>Articles</h2>
        <button 
          onClick={this.handleAdd}
        >+</button>
        <div className="articles">
          {this.props.articles && this.props.articles.map(article => 
            <div className="article" key={article.id} onClick={() => this.handleDelete(article.id)}>
              <div className="pic"></div>
              <h4 className="title">{article.title}</h4>
              <p className="subtext">{article.subtext}</p>
              <p className="author">By {article.author}</p>
            </div>
          )}
        </div>
      </div>
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
  connect(mapStateToProps)
)(Articles)