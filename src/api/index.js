export const search = async (value = "") => {
  const response = await fetch("http://localhost:3001/api/search", {
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
  const response = await fetch(`http://localhost:3001/api/items/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
