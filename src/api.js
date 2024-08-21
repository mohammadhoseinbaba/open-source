import { queries } from "@testing-library/react";
import axios from "axios";

const searchImages = async(term)=>{
 const response = await axios.get(`https://api.pexels.com/v1/search`,{
headers:{
Authorization:"wzL2LBvQKBKN8r9v2jlvlZFqFbcCprXg7yLkGle95uktJyvyNA6gXinP"
},
params:{
query:term,
}
})
return response.data.photos;
}


export default searchImages;