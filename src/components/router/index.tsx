import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../../styles/global";
import { StyleSheetManager } from "styled-components";
import SignIn from "src/pages/auth/signIn";
import CheckStudent from "src/pages/student";

const Router = () => {
  return (
    <StyleSheetManager>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/check-student/first-grade" element={<CheckStudent />} />
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
};

export default Router;
