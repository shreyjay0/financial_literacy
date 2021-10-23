import { BrowserRouter, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ExplorePage from "./pages/ExplorePage";
import HabitsPage from "./pages/HabitsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="" component={IndexPage} />
      <Route path="explore" component={ExplorePage} />
      <Route path="habits" component={HabitsPage} />
    </BrowserRouter>
  );
}

export default App;
