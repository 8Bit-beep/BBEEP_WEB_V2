import axios from "axios";
import CONFIG from "src/config/config.json";


const UseCheckClass = () => {

    
  const ClassFloor = async () => {
    try {
      const response = await axios.get(`${CONFIG.serverUrl}/student/attendList`, {

      });
    } catch (error) {}
  };
  



  return {};
};

export default UseCheckClass;
