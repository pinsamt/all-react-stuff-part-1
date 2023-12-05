import "./App.css";
import Home from "./Pages/MainPages/Home";
import { Route, Routes } from "react-router-dom";
import Navigator from "./Comp/Navigator";
import ParamAndStates from "./Pages/MainPages/ParamAndStates";
import "bootstrap/dist/css/bootstrap.min.css";
import Forum from "./Pages/MainPages/Forum";
import ForumHome from "./Pages/ForumHome";

function App() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ParamAStates" element={<ParamAndStates />}></Route>
        <Route path="/Forum/*" element={<Forum />}>
          <Route index element={<ForumHome />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
