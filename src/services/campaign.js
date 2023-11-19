import api from "./api";
import { showLoading } from "react-global-loading";

export function GetCampaign() {
  showLoading(true);
  return api.get("/campaigns").finally(() => {
    showLoading(false);
  });
}

export function GetCampaignTypes() {
  showLoading(true);
  return api.get("/campaigns-types").finally(() => {
    showLoading(false);
  });
}

export function GetCampaignID(id) {
  showLoading(true);
  return api.get("/campaigns/" + id).finally(() => {
    showLoading(false);
  });
}

export async function NewCampaign(data) {
  showLoading(true);
  return api.post("/campaigns", data).finally(() => {
    showLoading(false);
  });
}
