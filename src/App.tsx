import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import store from './store'
import routes from './routes'
import Hello from './components/Hello'
import {RouteProps} from "react-router";

const history = createBrowserHistory()


const RouteWithSubRoutes = (route: RouteProps) => (
  <Route path={route.path} render={props => (
    <route.component {...props} />
  )}/>
)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <ul>
              <li><Link to="/homepage">HomePage</Link></li>
              <li><Link to="/infopage">InfoPage</Link></li>
              <Hello compile="Typescript" framework="React" />
            </ul>
            {
              routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))
            }
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
