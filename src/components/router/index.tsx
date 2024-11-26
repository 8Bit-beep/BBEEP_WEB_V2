import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from '../../styles/global';
import { StyleSheetManager } from 'styled-components';
import SignIn from 'src/pages/auth/signin/index';
import CheckStudent from '../../pages/student/index';
import FirstClass from 'src/pages/class/firstClass';
import SecondClass from 'src/pages/class/secondClass';
import ThirdClass from 'src/pages/class/thirdClass';
import SignUp from 'src/pages/auth/signup';
import FindAuth from 'src/pages/auth/signup/findAuth';
import Management from 'src/pages/management';
import UploadCsv from 'src/pages/upload';

const Router = () => {
  return (
    <StyleSheetManager>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/check-student/*" element={<CheckStudent />} />
          <Route path="/check-class/first-floor" element={<FirstClass />} />
          <Route path="/check-class/second-floor" element={<SecondClass />} />
          <Route path="/check-class/third-floor" element={<ThirdClass />} />
          <Route path="/check-management/*" element={<Management />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/find" element={<FindAuth />} />
          <Route path="/upload-csv" element={<UploadCsv />} />
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
};

export default Router;
