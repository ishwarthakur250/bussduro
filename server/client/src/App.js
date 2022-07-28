import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test001 from './Tests/Test001';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Test001 />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
