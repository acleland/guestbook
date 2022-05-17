import { Switch, Route, Redirect } from 'react-router-dom';
import { useUser } from './context/UserContext';
import Auth from './views/Auth/Auth';
import PrivateRoute from './components/PrivateRoute';
import EntryList from './views/EntryList';
import Nav from './components/Nav';

export default function App() {
  return (
    <>
      <Switch>
        <Route path={'/login'}>
          <Auth />
        </Route>
        <PrivateRoute path={'/'}>
          <Nav />
          <EntryList />
        </PrivateRoute>
      </Switch>
    </>
  );
}
