export const saveToLocalStorage = (key: any, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLocalStorage = (key: any) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};
