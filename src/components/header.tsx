import { useState } from "react";
import {
  AnalyticsIcon,
  AppBar1,
  AppBar2,
  AppBar3,
  AppBar4,
  AppsIcon,
  BellIcon,
  BlockIcon,
  BugIcon,
  ChevronArrow,
  CrmIcon,
  GiftIcon,
  HomeIcon,
  LogoutIcon,
  MenuIcon,
  MessageIcon,
  ReceiptIcon,
  RevenueIcon,
  SettingsIcon,
  UserIcon,
} from "../assets/icons";
import logo from "../assets/logo.svg";
import Dropdown from "./ui/dropdown";
import { IconButton } from "./ui/icon-button";
import { useAPI } from "../hooks/useAPI";

type MenuItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

export const Header = () => {
  const { userQuery } = useAPI();
  const [expand, setExpand] = useState(false);

  const user = userQuery.data?.data as User;
  const menuItems: MenuItem[] = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Analytics", path: "/analytics", icon: <AnalyticsIcon /> },
    { label: "Revenue", path: "/revenue", icon: <RevenueIcon /> },
    { label: "CRM", path: "/crm", icon: <CrmIcon /> },
    // { label: "Apps", path: "/apps", icon: <AppsIcon /> },
  ];

  const dropdownItems: MenuItem[] = [
    { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
    {
      label: "Purchase History",
      path: "/purchase-history",
      icon: <ReceiptIcon />,
    },

    { label: "Refer and Earn", path: "/refer-and-earn", icon: <GiftIcon /> },
    { label: "Integrations", path: "/integrations", icon: <BlockIcon /> },
    { label: "Report Bug", path: "/report-bug", icon: <BugIcon /> },
    { label: "Switch Account", path: "/switch-account", icon: <UserIcon /> },
    { label: "Sign Out", path: "/sign-out", icon: <LogoutIcon /> },
  ];

  return (
    <header className="w-full px-4 pt-4">
      <div className="w-full bg-background px-6 py-3.5 rounded-larger flex items-center justify-between shadow-[0px_2px_4px_0px_#2D3B430D,0px_2px_6px_0px_#2D3B430F]">
        <img src={logo} alt="Logo" className="w-9 h-9" />
        <div className="hidden lg:flex items-center gap-5">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="font-semibold py-2 pl-3.5 rounded-larger pr-4.5 text-muted hover:bg-foreground hover:text-background transition-colors flex items-center gap-1"
            >
              <span className="w-5 h-5">{item.icon}</span>
              {item.label}
            </a>
          ))}
          <Dropdown
            trigger={
              <div
                onClick={() => setExpand((prev) => !prev)}
                className={`flex items-center rounded-larger ${
                  expand
                    ? "bg-foreground text-background divide-x divide-muted"
                    : ""
                }`}
              >
                <button
                  className={`${
                    expand
                      ? "rounded-r-none text-background"
                      : "rounded-l-larger rounded-r-larger text-muted"
                  } font-semibold py-2 pl-3.5 rounded-l-larger pr-4.5 hover:bg-foreground hover:text-background transition-colors flex items-center gap-1`}
                >
                  <span className="w-5 h-5">
                    <AppsIcon />
                  </span>
                  Apps
                </button>
                <button
                  className={`${
                    expand ? "flex text-background" : "hidden text-muted"
                  } font-semibold py-2 pl-3.5 rounded-r-larger pr-4.5  hover:bg-foreground hover:text-background transition-colors items-center gap-1`}
                >
                  Link In Bio
                  <span className="w-5 h-5">
                    <ChevronArrow />
                  </span>
                </button>
              </div>
            }
          >
            <div className="py-2 w-80">
              <div className="space-y-2 px-2">
                <a
                  href="/link-in-bio"
                  className="flex items-start gap-3 px-3 py-2 rounded-md hover:border border-accent"
                  data-dropdown-close="true"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-md border border-accent">
                    <AppBar1 />
                  </span>
                  <section className="w-full flex justify-between items-center group">
                    <div>
                      <div className="font-semibold">Link in Bio</div>
                      <div className="text-sm text-muted">
                        Manage your Link in Bio
                      </div>
                    </div>
                    <ChevronArrow className="text-muted w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </section>
                </a>

                <a
                  href="/store"
                  className="flex items-start gap-3 px-3 py-2 rounded-md hover:border border-accent"
                  data-dropdown-close="true"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-md border border-accent">
                    <AppBar2 />
                  </span>
                  <section className="w-full flex justify-between items-center group">
                    <div>
                      <div className="font-semibold">Store</div>
                      <div className="text-sm text-muted">
                        Manage your Store activities
                      </div>
                    </div>
                    <ChevronArrow className="text-muted w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </section>
                </a>

                <a
                  href="/media-kit"
                  className="flex items-start gap-3 px-3 py-2 rounded-md hover:border border-accent"
                  data-dropdown-close="true"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-md border border-accent">
                    <AppBar3 />
                  </span>
                  <section className="w-full flex justify-between items-center group">
                    <div>
                      <div className="font-semibold">Media Kit</div>
                      <div className="text-sm text-muted">
                        Manage your Media Kit
                      </div>
                    </div>
                    <ChevronArrow className="text-muted w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </section>
                </a>

                <a
                  href="/invoicing"
                  className="flex items-start gap-3 px-3 py-2 rounded-md hover:border border-accent"
                  data-dropdown-close="true"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-md border border-accent">
                    <AppBar4 />
                  </span>
                  <section className="w-full flex justify-between items-center group">
                    <div>
                      <div className="font-semibold">Invoicing</div>
                      <div className="text-sm text-muted">
                        Manage your Invoices
                      </div>
                    </div>
                    <ChevronArrow className="text-muted w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </section>
                </a>

                <a
                  href="/bookings"
                  className="flex items-start gap-3 px-3 py-2 rounded-md hover:border border-accent"
                  data-dropdown-close="true"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-md border border-accent">
                    <AppBar1 />
                  </span>
                  <section className="w-full flex justify-between items-center group">
                    <div>
                      <div className="font-semibold">Bookings</div>
                      <div className="text-sm text-muted">
                        Manage your Bookings
                      </div>
                    </div>
                    <ChevronArrow className="text-muted w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </section>
                </a>
              </div>
            </div>
          </Dropdown>
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
                  {user?.first_name.charAt(0) + user?.last_name.charAt(0)}
                </span>
                <MenuIcon className="text-muted" />
              </button>
            }
          >
            <div className="py-2">
              <section className="flex gap-2 px-4 mb-8">
                <span
                  style={{
                    background:
                      "linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%)",
                  }}
                  className="rounded-full w-12 h-12 text-xl flex items-center justify-center text-white font-semibold"
                >
                  {user?.first_name.charAt(0) + user?.last_name.charAt(0)}
                </span>
                <div>
                  <h2 className="font-semibold text-xl">
                    {user?.first_name} {user?.last_name}
                  </h2>
                  <p className="text-muted text-sm">{user?.email}</p>
                </div>
              </section>
              <section className="px-4">
                {dropdownItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="flex items-center gap-2 px-2 py-3 font-medium rounded hover:bg-accent"
                    data-dropdown-close="true"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
              </section>
            </div>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
