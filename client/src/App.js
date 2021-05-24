import React, {useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Navbar from "./components/Nav";
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  const [pageSelected, setPageSelected] = useState("home");
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
