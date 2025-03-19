export const getCategories = async () => {
  const response = await fetch("http://localhost:4000/food-category", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
};
