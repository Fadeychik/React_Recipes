import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"; 
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";
import { Category } from "./components/pages/Category";
import { Recipe } from "./components/pages/Recipe";


function App() {
  return (
    <div className="App">
      <Router basename='/React_Recipes'>
        <Header />
        <main className="container content">        
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/about' component={About} />
              <Route path='/contacts' component={Contact} />
              <Route path='/category/:name' component={Category} />
              <Route path='/meal/:id' component={Recipe} />
              <Route component={NotFound} />
            </Switch>        
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
