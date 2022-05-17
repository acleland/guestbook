import { Switch, Route, Redirect } from 'react-router-dom';
import { useUser } from './context/UserContext';
import Auth from './views/Auth/Auth';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <>
      <Switch>
        <Route path={'/login'}>
          <Auth />
        </Route>
        <PrivateRoute path={'/guestbook'}>
          <h1>My Guestbook</h1>
        </PrivateRoute>
        <Route path="/">
          <Redirect to="/guestbook" />
        </Route>
      </Switch>
    </>
  );
}
