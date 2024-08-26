import {
  HomeOutlined,
  MessageOutlined,
  NotificationOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export const sidebarMenus = [
  { title: "Home", path: "/home", icon: <HomeOutlined /> },
  { title: "Search", path: "/search", icon: <SearchOutlined /> },
  { title: "Create", path: "/create", icon: <PlusOutlined /> },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <NotificationOutlined />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <MessageOutlined />,
  },
];
