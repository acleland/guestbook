import { Switch, Route } from 'react-router-dom';
import { useUser } from './context/UserContext';
import Auth from './views/Auth/Auth';

export default function App() {
  return (
    <>
      <Switch>
        <Route path={'/login'}>
          <Auth />
        </Route>
        <Route path={'/guestbook'}>
          <h1>My Guestbook</h1>
        </Route>
      </Switch>
    </>
  );
}
