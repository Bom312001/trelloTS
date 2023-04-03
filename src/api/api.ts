import request from "../utils/request";

export async function loginApi(credentials: any): Promise<any> {
  try {
    const response = await request.get("users");
    return response;
  } catch (error) {
    console.log(error);
  }

  // request
  // .get('users')
  // .then((response) => {
  //     // return result
  //     console.log(response.data)
  // })
  // .catch((error) => { console.log(error) })
}
