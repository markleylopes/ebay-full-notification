import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { browserHistory } from 'store';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import 'moment/locale/pt-br';
import Home from 'components/Home';
import Theme from './theme';

const store = configureStore();
moment.defaultFormat = 'YYYY-MM-DD';
moment.locale('pt-BR');

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils} locale="pt-BR" moment={moment}>
      <Theme>
        <ConnectedRouter history={browserHistory}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              component={() => <div>Página não encontrada. Erro: 404</div>}
            />
          </Switch>
        </ConnectedRouter>
      </Theme>
    </MuiPickersUtilsProvider>
  </Provider>
);

export default App;
