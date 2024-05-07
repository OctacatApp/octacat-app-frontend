function saveSession(key, payload) {
  sessionStorage.setItem(key, payload);
}

function recoverSession(key = '') {
  return sessionStorage.getItem(key);
}

function deleteSession() {
  sessionStorage.clear();
}

export { saveSession, recoverSession, deleteSession };
