import { useGetProfile } from "src/services/common/Header/queries";
import { useState } from "react";

const useHeader = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleClicked = () => {
    setIsClicked((prev) => !prev);
  };

  const useGetProfileInfo = () => {
    const { data: profileInfo } = useGetProfile();

    if (profileInfo !== null && profileInfo !== undefined) {
      return profileInfo;
    }
  };

  return {
    keyword,
    isClicked,

    handleKeyword,
    handleClicked,
    useGetProfileInfo,
  };
};

export default useHeader;
