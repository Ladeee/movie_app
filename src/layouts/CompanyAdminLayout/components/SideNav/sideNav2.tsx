// ------------- import external dependencies -------------
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineCaretDown } from "react-icons/ai";

// ------------ import internal dependencies ----------
import Logo from "../../../../assets/logo-light.png";
import { ReactComponent as Dashboard } from "../../../../assets/svg/dashboard.svg";
import { ReactComponent as Accounts } from "../../../../assets/svg/accounts.svg";
import { ReactComponent as Support } from "../../../../assets/svg/support.svg";
import { sizes } from "../../../../utils/screenSizes";

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
    title: "Accounts Opening",
    icon: Accounts,
    path: "accounts",
  },

  {
    title: "Support",
    icon: Support,
    path: "support",
  },
];

interface Props {
  close: () => void;
}

function SideNav2({ close }: Props) {
  return (
    <SideNavWrapper>
      <AiOutlineClose className="close-menu" onClick={close} />
      <SideBarWrapper>
        <div className="flex justify-center">
          <img
            src={Logo}
            className=" h-[120px]"
            alt="Nester verify Brand logo"
          />
        </div>
        <div className="pl-10 flex items-center gap-4 text-white-50 font-montserrat font-bold text-2xl">
          <AiOutlineCaretDown />
          <span>Accounts</span>
        </div>

        {/* ------ company acount navigation ------ */}
        <nav>
          <ul className="list-none">
            {menus.map((ele: MenuItem, ind: number) => (
              <ListItem key={ind}>
                <NavLink
                  to={`/company-account/${ele.path}`}
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

export default SideNav2;

const SideNavWrapper = styled.aside`
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 2;

  .close-menu {
    display: none;
  }

  @media screen and (max-width: ${sizes.tabletL}) {
    background: var(--white50);
    .close-menu {
      display: block;
      margin-left: auto;
      position: absolute;
      top: 14px;
      right: 14px;
      font-size: 1.5rem;
      color: var(--blue100);
    }
  }
`;

const SideBarWrapper = styled.div`
  background: var(--blue100);
  height: 90%;
  border-radius: 30px;
  margin-left: 1.5rem;
  overflow-y: auto;
  overscroll-behavior-y: contain;
`;

const ListItem = styled.li`
  margin-bottom: 1.4rem;
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    font-family: "Montserrat", sans-serif;
    color: var(--white50);
  }
`;

const OtherMenus = styled.ul`
  margin-top: 20rem;

  li {
    margin-bottom: 0.5rem;
  }
`;
