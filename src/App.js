import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Header from "./Components/Header/Header";
import Ex_colors from "./Pages/Ex_Colors/Ex_colors";
import DemoHook from "./Pages/DemoHook/DemoHook";
function App() {
  return (
    <div className=" container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/detail/:id" component={DetailPage} />
          {/* <Route path="/demo-hook" component={DemoHook} /> */}
          <Route path="/ex-colors" component={Ex_colors} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
