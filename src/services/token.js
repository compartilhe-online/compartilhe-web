import api from "./api";

export default function VerifyToken() {
  const jwt = JSON.parse(localStorage.getItem("jwt")) || null;

  if (jwt) {
    api
      .get("/auth/verify", {
        headers: { Authorization: `Bearer ${jwt.token}` },
      })
      .catch((e) => {
        if (e.response.status === 401) {
          localStorage.clear();
          return false;
        }
      })
      .then(() => {
        return true;
      });
    return true;
  }
  return false;
}
