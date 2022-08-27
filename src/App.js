import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className=" container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route
            path="/detail"
            render={() => {
              return <DetailPage />;
            }}
          />
          {/* <Route path="/detail" component={DetailPage} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
