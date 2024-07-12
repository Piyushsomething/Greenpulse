import React from "react";

const UserProfilePage = ({ params }) => {
  return (
    <div className="flex h-screen items-center justify-center text-5xl">
      UserProfilePage of user: {params.username}
    </div>
  );
};

export default UserProfilePage;
