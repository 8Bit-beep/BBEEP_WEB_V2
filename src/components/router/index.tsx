import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../../styles/global";
import { StyleSheetManager } from "styled-components";
import SignIn from "src/pages/auth/signIn";

const Router = () => {
  return (
    <StyleSheetManager>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
};

export default Router;
