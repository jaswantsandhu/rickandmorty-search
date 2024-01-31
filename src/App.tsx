import "./App.css";
import Homepage from "./pages/HomePage";
import Header from "./components/common/Header/Header";
import Error from "./components/common/Error/Error";
import Footer from "./components/common/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Error />
      <Routes>
        <Route path="/" Component={Homepage}></Route>
        <Route path="/characters" Component={CharactersPage}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
