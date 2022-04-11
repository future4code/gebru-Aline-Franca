import axios from "axios";
import { useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";



const TripDetails = () => {
  useProtectedPage();

  useEffect(() => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-franca-gebru/trip/7Pk6XaxBDCfXqluFuMLd";
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };

    axios
      .get(URL, headers)
      .then((res) => {
        console.log(res.data.trip);
      })
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
  }, []);

  return (
  <p>Detalhes da viagem!!!</p>
  )
  
}

export default TripDetails;