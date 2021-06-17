import Layouts from './components/layouts/Layouts';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetupsPage';

function App() {
  return (<Router>
    <Layouts>
     <Switch>
       <Route path="/">
         <AllMeetupsPage/>
       </Route>
     </Switch>
   </Layouts>
 </Router>)
}

export default App;
