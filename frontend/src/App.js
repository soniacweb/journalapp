import 'bulma/css/bulma.min.css';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home';
import Register from './Register';
import Login from './Login';

import Entries from './Entries';
import AddEntry from './AddEntry';
import SingleEntry from './SingleEntry'

function App() {
  return (

    <Router>
  
     <Switch>
    {/* <Route path="/entry/:entryid" component={SingleEntry} /> */}
    <Route path='/entries' component={Entries}/>
    <Route path='/addentry' component={AddEntry}/>

    <Route exact path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/singleentry' component={SingleEntry}/>

    </Switch>
    </Router>
  );
}

export default App;
