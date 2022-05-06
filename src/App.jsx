import { Switch, Route } from 'react-router-dom';
import Auth from './views/Auth';

export default function App() {
  return (
    <>
      <Switch>
        <Route path={'/'}>
          <Auth />
        </Route>
        <Route path={'/guestbook'}>
          <h1>My Guestbook</h1>
        </Route>
      </Switch>
    </>
  );
}
