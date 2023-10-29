export const awaiter = (duration = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, duration);
});

export const saveToLocalStorage = (key = '', payload = {}) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getFromLocalStorage = (key = '') => localStorage.getItem(key);
