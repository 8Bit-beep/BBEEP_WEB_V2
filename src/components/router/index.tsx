import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../../styles/global";
import { StyleSheetManager } from "styled-components";
import SignIn from "src/pages/auth/signin/index";
import CheckStudent from "src/pages/student";
import SignUp from "src/pages/auth/signup";
import FindAuth from "src/pages/auth/signup/findAuth";

const Router = () => {
  return (
    <StyleSheetManager>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/check-student/first-grade" element={<CheckStudent />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/find" element={<FindAuth />} />
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
};

export default Router;
