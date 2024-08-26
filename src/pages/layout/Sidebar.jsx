import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { sidebarMenus } from ".";
import { Avatar } from "antd";
import { useCallback, useState } from "react";
import { colors } from "../utils/Styles";
import { useStateContext } from "../context/Context";

const Sidebar = () => {
  const { selected, handleSelected } = useStateContext();

  return (
    <>
      {sidebarMenus?.map((menu) => {
        return (
          <div
            onClick={() => handleSelected(menu?.path)}
            key={menu?.id}
            className={`flex items-center gap-4 m-5 p-1 cursor-pointer`}
          >
            <Avatar
              size="small"
              style={{
                color: selected === menu?.path ? colors?.pink : "black",
              }}
              className="bg-transparent pink"
              icon={menu?.icon}
            />
            <h2
              style={{
                color: selected === menu?.path ? colors?.pink : "black",
              }}
            >
              {menu?.title}
            </h2>
          </div>
        );
      })}

      <div className="flex items-end top-[50%] relative">
        <div>
          <div
            onClick={() => handleSelected("/profile")}
            className="flex gap-3  ml-5 p-1 cursor-pointer"
          >
            <Avatar
              style={{
                color: selected === "/profile" ? colors?.pink : "black",
              }}
              size="small"
              className="bg-transparent text-black"
              icon={<UserOutlined />}
            />
            <h2
              style={{
                color: selected === "/profile" ? colors?.pink : "black",
              }}
            >
              Profile
            </h2>
          </div>
          <div
            onClick={() => handleSelected("/settings")}
            className="flex gap-3  m-5 mb-0 p-1 cursor-pointer"
          >
            <Avatar
              style={{
                color: selected === "/settings" ? colors?.pink : "black",
              }}
              size="small"
              className="bg-transparent text-black"
              icon={<SettingOutlined />}
            />
            <h2
              style={{
                color: selected === "/settings" ? colors?.pink : "black",
              }}
            >
              Settings
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
