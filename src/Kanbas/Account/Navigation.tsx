import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Fixed import
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: { accountReducer: { currentUser: { role: string } | null } }) =>
      state.accountReducer
  );

  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          className={`${
            pathname.includes(link) ? "active" : "text-danger"
          } list-group-item border-0`}
          to={`/Kanbas/Account/${link}`}
        >
          {link}
        </Link>
      ))}

      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`${
            pathname.includes("Users") ? "active" : ""
          } list-group-item`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
