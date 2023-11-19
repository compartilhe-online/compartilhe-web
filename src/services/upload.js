import api from "./api";
import { showLoading } from "react-global-loading";

export async function Upload(data) {
  showLoading(true);
  return api.post("/upload", data).finally(() => {
    showLoading(false);
  });
}
