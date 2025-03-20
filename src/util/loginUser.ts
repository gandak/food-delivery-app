type UserLoginType = {
  email: string;
  password: string;
};

export const loginUser = async (values: UserLoginType) => {
  const response = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    }),
  });

  const jsonData = await response.json();
  return jsonData;
};
