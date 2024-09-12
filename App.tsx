import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/appNavigator';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default App;
