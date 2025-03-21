export const resetPassword = async (password: string, token: string) => {
  const response = await fetch("http://localhost:4000/auth/reset-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
      password: password,
    }),
  });

  const jsonData = await response.json();
  return jsonData;
};
