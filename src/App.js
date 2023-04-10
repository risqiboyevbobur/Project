import NavbarMenu from "./components/Navbar/NavbarMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotel from "./components/Hotel/Hotel";
import Create from "./components/CreatePage/Create";
import TableoneRow from "./components/Table/Table";
import EditPage from "./components/EditPage/EditPage";

function App() {
  return (
    <>
      <Router>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Hotel />} />
          <Route path="/create" element={<Create />} />
          <Route path="/tableone" element={<TableoneRow />} />
          <Route path="/tableone/edit/:id" element={<EditPage />} />
          <Route path="*" element={<h1>404 NOT FOUND </h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
