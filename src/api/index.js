export const search = async (value = "") => {
  const response = await fetch("https://api-express-o.herokuapp.com/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value }),
  });

  const data = await response.json();
  return data;
};

export const getDogById = async (id = "") => {
  const response = await fetch(`https://api-express-o.herokuapp.com/api/items/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
