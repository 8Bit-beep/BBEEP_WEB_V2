import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../../styles/global.ts";
import { StyleSheetManager } from "styled-components";
import SignIn from "src/pages/auth/signIn";
import CheckStudent from "src/pages/student";
import FirstClass from "src/pages/class/firstClass";
import SecondClass from "src/pages/class/secondClass";
import ThirdClass from "src/pages/class/thirdClass";

const Router = () => {
  return (
    <StyleSheetManager>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/check-student/first-grade" element={<CheckStudent />} />
          <Route path="/check-class/first-floor" element={<FirstClass />} />
          <Route path="/check-class/second-floor" element={<SecondClass />} />
          <Route path="/check-class/third-floor" element={<ThirdClass />} />
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
};

export default Router;
