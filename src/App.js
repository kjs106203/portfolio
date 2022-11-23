import { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Port from "./Port";
import Resume from "./Resume";

function App() {
  const [page, setPage] = useState("resume"); // resume | port
  return (
    <div>
      <Route path='/' exact={true} component={Resume} />
      <Route path='/port' component={Port} />
    </div>
  );
  // return page === 'resume' ? <Resume setPage={setPage} /> : <Port />;
}

export default App;
