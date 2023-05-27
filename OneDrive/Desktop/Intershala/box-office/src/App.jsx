
import { BrowserRouter,Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Starred from "./pages/Starred";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/starred" element={<Starred/>}/>
      <Route path="*" element={<div>404 Not found page</div>} />

     {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
  <Route path="contact-us" element={<Contact />} />*/}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
