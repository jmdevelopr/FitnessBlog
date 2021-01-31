import '../../../styles/css/Categories.min.css';

const Categories = () => {

  const categories = ['EVERYTHING', 'DIET', 'KNOWLEDGE', 'WORKOUT'];

  return (
    <div className="categories-section">
      <h2>Categories</h2>
      <div className="categories">
        {categories.map((category, key) =>
          <div className="category" key={key}>
            <p>{category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;