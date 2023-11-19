import api from "./api";

export default function AuthUser(data) {
  return api
    .post("/auth", data)
    .then((e) => localStorage.setItem("jwt", JSON.stringify(e.data)));
}
