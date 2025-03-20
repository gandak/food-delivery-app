type UserCreateType = {
  email: string;
  password: string;
  confirm: string;
};

export const addUser = async (values: UserCreateType) => {
  const response = await fetch("http://localhost:4000/auth/signup", {
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
