import { useEffect, useState, useContext } from "react";
import { get } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import placeholderImage from "../images/default-profile-photo.jpg";

function UserProfilePage() {
  // const [user, setUser] = useState(null);

  // const { userId } = useContext(AuthContext);

  // const { userId } = useParams();

  const { user } = useContext(AuthContext)


  return (
    <div className="UserDetailsPage bg-gray-100 py-6 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        {user && (
          <>
            <img
              src={placeholderImage}
              alt="profile-photo"
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4">
              <label className="text-left mb-2">
                <strong>Name:</strong> {user.name}
              </label>
              <label className="text-left mb-2">
                <strong>Email:</strong> {user.email}
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserProfilePage;
