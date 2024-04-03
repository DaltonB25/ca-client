import { useEffect, useState, useContext } from "react";
import { get } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;



function UserProfilePage() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userId } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(undefined);
  // const { userId } = useParams();

  useEffect(() => {
    const getUser = () => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        get(`/users/${userId}`,
          { headers: { Authorization: `Bearer ${storedToken}` }}
          )
          .then((response) => {
            setUserProfile(response.data);
            setLoading(false);
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          });
        }
        else {
          setErrorMessage("User not logged in");
        }
    };

    getUser();
  }, [userId]);

  if (errorMessage) return <div>{errorMessage}</div>;
  
  if (loading) return <div>Loading...</div>;

  return (
    <div className="UserDetailsPage bg-gray-100 py-6 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        {userProfile && (
          <>
            <img
            src={placeholderImage}
            alt="profile-photo"
            className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
          />            
            <h1 className="text-2xl mt-4 font-bold absolute">{userProfile.name}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4">
              <p className="text-left mb-2 border-b pb-2">
                <strong>Email:</strong> {userProfile.email}
              </p>
            </div>
          </>
        )}
      </div>
      
    </div>
  );
}

export default UserProfilePage;