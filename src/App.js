import "./App.css";
import Home from "./pages/Home"
import Shaleh from "./pages/Shaleh"
import SingleShaleh from "./pages/SingleShaleh"
import Error from "./pages/Error"
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return <> 
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/shaleh" component={Shaleh}/>
            <Route exact path="/shaleh/:slug" component={SingleShaleh}/>
            <Route component={Error}/>
          </Switch>
         </>
}

export default App;
