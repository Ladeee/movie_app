// ------------- import external dependencies -------------
import styled from "styled-components";

// ------------ import internal dependencies ----------
import Logo from "../../../../assets/logo-light.png";
import { ReactComponent as Dashboard } from "../../../../assets/svg/dashboard.svg";
import { ReactComponent as Jobs } from "../../../../assets/svg/jobs.svg";
import { ReactComponent as Transactions } from "../../../../assets/svg/transactions.svg";
import { ReactComponent as Messages } from "../../../../assets/svg/messages.svg";
import { ReactComponent as Users } from "../../../../assets/svg/users.svg";
import { ReactComponent as Accounts } from "../../../../assets/svg/accounts.svg";
import { ReactComponent as Insights } from "../../../../assets/svg/insights.svg";
import { ReactComponent as Support } from "../../../../assets/svg/support.svg";
import { Link, NavLink } from "react-router-dom";

interface MenuItem {
  title: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  path: string;
}

// ------- sidebar navigation menus --------
const menus: MenuItem[] = [
  {
    title: "Dashboard",
    icon: Dashboard,
    path: "dashboard",
  },
  {
    title: "Jobs",
    icon: Jobs,
    path: "jobs",
  },
  {
    title: "Transactions",
    icon: Transactions,
    path: "trabsactions",
  },
  {
    title: "Messages",
    icon: Messages,
    path: "messages",
  },
  {
    title: "User Management",
    icon: Users,
    path: "users",
  },
  {
    title: "Accounts Opening",
    icon: Accounts,
    path: "accounts",
  },
  {
    title: "Insights",
    icon: Insights,
    path: "insights",
  },
  {
    title: "Support",
    icon: Support,
    path: "support",
  },
];

function SideNav() {
  return (
    <SideNavWrapper>
      <SideBarWrapper>
        <div className="flex justify-center">
          <img
            src={Logo}
            className=" h-[120px]"
            alt="Nester verify Brand logo"
          />
        </div>
        <nav>
          <ul className=" list-none">
            {menus.map((ele: MenuItem, ind: number) => (
              <ListItem key={ind}>
                <NavLink
                  to={`/company/${ele.path}`}
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-normal"
                  }
                >
                  <ele.icon />
                  <span>{ele.title}</span>
                </NavLink>
              </ListItem>
            ))}
          </ul>

          <OtherMenus className="list-none">
            <ListItem>
              <Link to="/company/settings">Settings</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Logout</Link>
            </ListItem>
          </OtherMenus>
        </nav>
      </SideBarWrapper>
    </SideNavWrapper>
  );
}

export default SideNav;

const SideNavWrapper = styled.aside`
  width: 280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
`;

const SideBarWrapper = styled.div`
  background: var(--blue100);
  height: 90%;
  border-radius: 30px;
  margin-left: 1.5rem;
  overflow-y: auto;
`;

const ListItem = styled.li`
  margin-bottom: 1.4rem;
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    font-family: "Montserrat", sans-serif;
    overscroll-behavior-y: contain;
    color: var(--white);
  }
`;

const OtherMenus = styled.ul`
  position: absolute;
  bottom: 55px;

  li {
    margin-bottom: 0.5rem;
  }
`;
