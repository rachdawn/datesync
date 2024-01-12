import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

const useAuth0UserHandler = () => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      const userInfo = {
        email: user.email,
        given_name: user.given_name,
        family_name: user.family_name,
      };
      sendDataToBackend(userInfo);
    }
  }, [isAuthenticated, user]);

  const sendDataToBackend = async (userInfo) => {
    try {
      const response = await axios.post('/api/users', userInfo);
      console.log('User data saved:', response.data);
    } catch (error) {
      console.error('Error with handler for saving user data:', error);
    }
  };
};

export default useAuth0UserHandler;
