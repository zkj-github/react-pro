// src/index.js
function formatDate(date) {
  return date.toLocaleDateString();
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export {
  capitalize,
  formatDate
};
