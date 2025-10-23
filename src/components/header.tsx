import {
  AnalyticsIcon,
  AppsIcon,
  BellIcon,
  CrmIcon,
  HomeIcon,
  MenuIcon,
  MessageIcon,
  RevenueIcon,
} from "../assets/icons";
import logo from "../assets/logo.svg";
import Dropdown from "./ui/dropdown";
import { IconButton } from "./ui/icon-button";

type MenuItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

export const Header = () => {
  const menuItems: MenuItem[] = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Analytics", path: "/analytics", icon: <AnalyticsIcon /> },
    { label: "Revenue", path: "/revenue", icon: <RevenueIcon /> },
    { label: "CRM", path: "/crm", icon: <CrmIcon /> },
    { label: "Apps", path: "/apps", icon: <AppsIcon /> },
  ];

  return (
    <header className="w-full px-4 pt-4">
      <div className="w-full bg-background px-6 py-[.875rem] rounded-larger flex items-center justify-between shadow-[0px_2px_4px_0px_#2D3B430D,0px_2px_6px_0px_#2D3B430F]">
        <img src={logo} alt="Logo" className="w-9 h-9" />
        <div className="hidden lg:flex items-center gap-5">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="font-semibold py-2 pl-[.875rem] rounded-larger pr-4.5 text-muted hover:bg-foreground hover:text-background transition-colors flex items-center gap-1"
            >
              <span className="w-5 h-5">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <IconButton icon={<BellIcon />} />
          <IconButton icon={<MessageIcon />} />
          <Dropdown
            trigger={
              <button className="flex items-center gap-2 bg-[#EFF1F6] pl-[5px] pr-3 py-1 rounded-larger">
                <span
                  style={{
                    background:
                      "linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%)",
                  }}
                  className="rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold"
                >
                  OJ
                </span>
                <MenuIcon className="text-muted" />
              </button>
            }
          >
            <div className="py-2">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                data-dropdown-close="true"
              >
                Action 1
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                data-dropdown-close="true"
              >
                Action 2
              </button>
              <a
                href="/help"
                className="block px-4 py-2 hover:bg-gray-100"
                data-dropdown-close="true"
              >
                Help
              </a>
            </div>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
