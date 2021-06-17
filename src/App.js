import Layouts from './components/layouts/Layouts';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetupsPage';
import NewMeetupPage from './pages/NewMeetupPage';
import Favourites from './pages/Favourites';

function App() {
  return (<Router>
    <Layouts>
     <Switch>
       <Route path="/" exact>
         <AllMeetupsPage/>
       </Route>
       <Route path="/new-meetup">
         <NewMeetupPage/>
       </Route>
       <Route path="/favorites">
         <Favourites/>
       </Route>
     </Switch>
   </Layouts>
 </Router>)
}

export default App;
