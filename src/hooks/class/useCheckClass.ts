import axios from "axios";
import CONFIG from "src/config/config.json";
import { Code } from "src/pages/class/data";

const UseCheckClass = () => {
  const CodeMap = Object.keys(Code).map((key) => {
    const label = key as keyof typeof Code;
    return { label, value: Code[label] };
  });


 const ClassCode = () => {
    
 }


  const CheckFloor = async () => {
    try {
      const response = await axios.get(`${CONFIG.serverUrl}/student/attendList={}`, {});
    } catch (error) {

    }
  };

  return {};
};

export default UseCheckClass;
