export const getFoods = async () => {
  const response = await fetch("http://localhost:4000/food", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonData = await response.json();
  return jsonData;
};
