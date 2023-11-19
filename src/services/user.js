import api from "./api";
import { showLoading } from "react-global-loading";

export function GetActiveUsers(id) {
  showLoading(true);
  return api.get("/users").finally(() => {
    showLoading(false);
  });
}

export function GetUserProfileID(id) {
  showLoading(true);
  return api.get("/users/profile/" + id).finally(() => {
    showLoading(false);
  });
}

export async function UpdateUserProfile(data) {
  showLoading(true);
  return api.patch("/users", data).finally(() => {
    showLoading(false);
  });
}
