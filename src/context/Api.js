const server = "http://localhost:8000/";
const apiLogin = `${server}auth/login`;
const serverUser = `${server}user`;
const apiRegister = `${server}auth/register`;
const apiDelete = `${server}auth/delete`;
const apiTasks = `${server}tasks/`;

module.exports = {
  server,
  apiLogin,
  apiRegister,
  serverUser,
  apiDelete,
  apiTasks,
};
