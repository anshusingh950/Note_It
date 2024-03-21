import './App.css';
import GetData from "./Screen/GetData"
import PutData from "./Screen/PutData"

import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
        <Router>
            <div>
                <Routes>
                <Route exact path="/GetData" element={<GetData/>}  />
                <Route exact path="/PutData" element={<PutData/>}  />
                <Route exact path="/" element={<PutData/>}  />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
