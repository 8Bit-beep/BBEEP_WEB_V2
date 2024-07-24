export const converUrlToGrade = (url: string) => {
  switch (url) {
    case "/check-student/first-grade":
      return 1;
    case "/check-student/second-grade":
      return 2;
    case "/check-student/third-grade":
      return 3;
    default:
      return 0;
  }
};
