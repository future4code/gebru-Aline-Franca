import Reac from "react";
import axios from "axios";

axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person', {
headers: {
    'Authorization': 'aline-franca-gebru'
}
})