import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { pathname } = useLocation(); 

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <Link
        id="wd-course-home-link"
        to="/Kanbas/Account/Signin"
        className={`list-group-item list-group-item-action ${
          pathname.includes("Signin") ? "active border-0" : "text-danger border-0"
        }`}
      >
        Sign In
      </Link>
      <br />

      <Link
        to="/Kanbas/Account/Signup"
        className={`list-group-item list-group-item-action ${
          pathname.includes("Signup") ? "active border-0" : "text-danger border-0"
        }`}
      >
        Sign Up
      </Link>
      <br />

      <Link
        to="/Kanbas/Account/Profile"
        className={`list-group-item list-group-item-action ${
          pathname.includes("Profile") ? "active border-0" : "text-danger border-0"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}
