import './styles/css/App.min.css';

import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Create from './components/Create/Create';
import Cart from './components/Cart';
import Footer from './components/Footer';

import Admin from './components/Admin';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">

        <Header/>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
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
