import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar2 = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [accessTokenCookie, setaccessTokenCookie] = useState('')
  useEffect(() => {
    const fetchedcookie = Cookies.get('access_token_login');
    setaccessTokenCookie(fetchedcookie);
  }, []);


  const handleLogout = () => {
    Cookies.remove("access_token_login");
    Cookies.remove("IsAdmin");
    router.push("/login");
  };

  return (
    <nav className="bg-green-900 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#87A922] text-center w-full sm:w-auto mb-4 sm:mb-0">
          <Link href="">
            GreenPulse: Nurturing Your Legacy
          </Link>
        </div>
        
        <div className="block sm:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#87A922] hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>

        <div className={`w-full sm:flex sm:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-2 sm:space-y-0 mt-4 sm:mt-0">
            
            <Link href='/' className="text-[#87A922] hover:text-white transition duration-300 ease-in-out">
              My Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-[#87A922] text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;