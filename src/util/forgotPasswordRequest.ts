export const forgotPasswordRequest = async (email: string) => {
  const response = await fetch(
    "http://localhost:4000/auth/reset-password-request",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  );

  const jsonData = await response.json();
  if (jsonData.email) return jsonData;
};
