export const awaiter = (duration = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, duration);
});
