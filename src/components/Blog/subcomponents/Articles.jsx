import { connect } from 'react-redux';
import addArticle from '../../../redux/actions/addArticle';
import '../../../styles/css/Articles.min.css';

const Articles = (props) => {

  const handleClick = () => props.addArticle({
    title: 'A complete push-up tutorial for beginners.',
    subtext: 'Learn how to do push-ups and not overdo yourself!',
    author: 'Kuba Makuch'
  });

  return (
    <div className="articles-section">
      <h2>Articles</h2>
      <button onClick={handleClick}>+</button>
      <div className="articles">
        {props.articles.map((article, key) => 
          <div className="article" key={key}>
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

const mapStateToProps = state => {
  return { 
    articles: state.articlesReducer.articles
  }
}

const mapDistapchToProps = { addArticle }

export default connect(mapStateToProps, mapDistapchToProps)(Articles);