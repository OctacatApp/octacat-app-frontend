function saveSession(key, data) {
  sessionStorage.setItem(key, data);
}

function recoverSession(key) {
  return sessionStorage.getItem(key);
}

function deleteSession() {
  sessionStorage.clear();
}

export { saveSession, recoverSession, deleteSession };
