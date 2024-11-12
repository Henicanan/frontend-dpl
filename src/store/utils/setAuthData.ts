export const setAuthData = (userToken: string, userRole: string) => {
  localStorage.setItem("token", userToken);
  localStorage.setItem("role", userRole);
};
