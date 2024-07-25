import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../../styles/global";
import { StyleSheetManager } from "styled-components";
import CheckStudent from "src/pages/student";
import CheckClass from "src/pages/class";

const Router = () => {
  return (
    <StyleSheetManager>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/check-student/first-grade" element={<CheckStudent />} />
          <Route path="/check-class/first-floor" element={<CheckClass />} />
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
};

export default Router;
