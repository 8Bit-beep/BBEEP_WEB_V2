import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../../styles/global.ts";
import { StyleSheetManager } from "styled-components";
import CheckStudent from "src/pages/student/index.tsx";

const Router = () => {
  return (
    <StyleSheetManager>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/check-student/first-grade" element={<CheckStudent />} />
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
};

export default Router;
