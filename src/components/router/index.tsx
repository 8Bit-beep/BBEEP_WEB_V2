import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../../styles/global.ts";
import { StyleSheetManager } from "styled-components";
import SignIn from "src/pages/auth/signIn";
import CheckStudent from "../../pages/student/index.tsx"

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
