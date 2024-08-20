import { queries } from "@testing-library/react";
import axios from "axios";

const searchImages = async(term)=>{
 const response = await axios.get(`https://api.unsplash.com/search/photos`,{
headers:{
Authorization:"Client-ID "
},
params:{
query:term,
}
})
return response.data.result;
}
export default searchImages;