import { sidebarMenuStore } from "src/stores/common/student.store";
import { useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";

interface NavigationProps {
  location: {
    pathname: string;
  };
  navigate: NavigateFunction;
}

const UseSideBarNavigation = ({ location, navigate }: NavigationProps) => {
  const [isClickCategory, setIsClickCategory] = useState("1학년");
  const setMenu = sidebarMenuStore((state) => state.setMenu);
  useEffect(() => {
    const handleNavigation = () => {
      switch (location.pathname) {
        case "/check-student/first-grade":
          setIsClickCategory("1학년");
          setMenu(isClickCategory);
          break;
        case "/check-student/second-grade":
          setIsClickCategory("2학년");
          setMenu(isClickCategory);
          break;
        case "/check-student/third-grade":
          setIsClickCategory("3학년");
          setMenu(isClickCategory);
          break;
        case "/check-class/first-floor":
          setIsClickCategory("1층");
          setMenu(isClickCategory);
          break;
        case "/check-class/second-floor":
          setIsClickCategory("2층");
          setMenu(isClickCategory);
          break;
        case "/check-class/third-floor":
          setIsClickCategory("3층");
          setMenu(isClickCategory);
          break;
        default:
          setIsClickCategory("");
          break;
      }
    };

    handleNavigation();
  }, [location.pathname]);

  const handleCategoryClick = (itemName: string) => {
    setIsClickCategory(itemName);
    switch (itemName) {
      case "1학년":
        navigate("/check-student/first-grade");
        break;
      case "2학년":
        navigate("/check-student/second-grade");
        break;
      case "3학년":
        navigate("/check-student/third-grade");
        break;
      case "1층":
        navigate("/check-class/first-floor");
        break;
      case "2층":
        navigate("/check-class/second-floor");
        break;
      case "3층":
        navigate("/check-class/third-floor");
        break;
      default:
        navigate("");
        break;
    }
  };

  return {
    isClickCategory,
    handleCategoryClick,
  };
};

export default UseSideBarNavigation;
