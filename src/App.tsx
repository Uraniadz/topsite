import './App.css';
import ScrollNavigator from './components/UI_components/ScrollNavigator/ScrollNavigator';
import ScrollToTop from './components/UI_components/ScrollToTop/ScrollToTop';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
      <ScrollNavigator />
    </>
  );
}

export default App;
