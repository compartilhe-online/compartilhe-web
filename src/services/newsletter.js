import api from "./api";
import { showLoading } from "react-global-loading";

export function Subscribe(email) {
  showLoading(true);
  return api.get("/newsletter/subscribe/" + email).finally(() => {
    showLoading(false);
  });
}

export function Unsubscribe(email) {
  showLoading(true);
  return api.get("/newsletter/unsubscribe/" + email).finally(() => {
    showLoading(false);
  });
}
