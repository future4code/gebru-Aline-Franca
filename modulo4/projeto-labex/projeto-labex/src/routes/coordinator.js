

export const GoToLogin = (navigate) =>{
    navigate("/LoginPage")
};    


export const GoToAdminPage = (navigate) => {
    navigate("Admin");
  };

export const GoToTripsList = (navigate) =>{
    navigate("/ListTrip")
}

export const GoToDetails = (navigate) =>{
    navigate=("/TripDetails")
}

export const GoToForm = (navigate, list) =>{
    navigate("Form")
}

export const GoToCreate =(navigate)=>{
    navigate("CreateTrip")
}

export const GoBack = (navigate) =>{
    navigate(-1)
}