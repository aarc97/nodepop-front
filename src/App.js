import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/header.component";
import AppRouter from "./routers/app-router";

import SessionContext from "./context/SessionContext";

import "./App.css";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter className='App'>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
