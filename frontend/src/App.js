import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentcation";
import { lightTheme } from "./utils/themes";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

const App = () => {
  const [user, setUser] = useState(true);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {user ? (
        <Container>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/workouts" exact element={<Workouts />} />
        </Routes>
      </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
