import api from "./api";
import AuthUser from "./auth";
import UserProfile from "./profile";
import delay from "../helpers/delay";
import { showLoading } from "react-global-loading";

export default async function RegisterUser(data) {
  showLoading(true);
  return api.post("/users", data).then(async (e) => {
    AuthUser({
      email: data.email,
      password: data.password,
    });
    await delay(2000);
    UserProfile();
    showLoading(false);
  });
}
