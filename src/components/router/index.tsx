import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../../styles/global";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default Router;
