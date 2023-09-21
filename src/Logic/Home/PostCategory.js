import axios from "axios";

export default async function PostCategory(name) {
  const response = await axios.Post({
    url: "api/Category",
    data: {
      name: { name }
    },
    header : {
      'Content-Type' : 'application/json'
    }
  });
  console.log(response);
  return(response);
}
