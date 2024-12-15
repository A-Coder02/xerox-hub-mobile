import { loginUrl } from "../utils/urls";

const loginUser = async () => {
    try {
  
      const response = await axios.get(loginUrl, {
        headers: {
        //   Authorization: `Bearer ${token}`,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('login user data error:', error);
      throw new Error('Failed to login user data');
    }
  };

  export default {
    loginUser
  }