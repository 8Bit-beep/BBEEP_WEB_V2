import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../../styles/global";
import { StyleSheetManager } from "styled-components";
import Header from "../common/Header";

const Router = () => {
  return (
    <StyleSheetManager>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
};

export default Router;
