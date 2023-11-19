import api from "./api";
import { showLoading } from "react-global-loading";

export default function UserProfile() {
  //   const navigate = useNavigate();
  return api
    .get("/users/profile")
    .catch((e) => {
      return null;
    })
    .then((e) => {
      if (e) {
        localStorage.setItem("profile", JSON.stringify(e.data));
      }
    });
}
