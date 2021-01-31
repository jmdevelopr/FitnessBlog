import './styles/css/App.min.css';

import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">

        <Header/>
        <Switch>
          <Route path="/">
            <Blog />
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
