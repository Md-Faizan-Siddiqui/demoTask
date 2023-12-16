
import './App.css';
import Navbar from "./component/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from './pages/userForm';
import UserTable from './pages/userTable';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="main">
      <BrowserRouter>
        <Routes>
              <Route
                exact
                path="/"
                element={<Navbar Component={UserForm} />}
              />
              <Route
                exact
                path="/user-table"
                element={<Navbar Component={UserTable} />}
              />
               </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
