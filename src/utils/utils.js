const saveStorage = (key, payload) => {
  localStorage.setItem(key, payload);
};

const recoverStorage = (key = '') => localStorage.getItem(key);

const deleteStorage = () => localStorage.clear();

export { saveStorage, recoverStorage, deleteStorage };
