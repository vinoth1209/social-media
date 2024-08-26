/* eslint-disable react/prop-types */
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Image, Tooltip } from "antd";
// import { CiCircleMore } from "react-icons/ci";
import avat from "../../assets/ava-1.jpg";
import { BsBalloonHeart, BsBalloonHeartFill } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";

import { MdOutlineModeComment } from "react-icons/md";
import {
  AntDesignOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useStateContext } from "../context/Context";
import { useState } from "react";
import { getPostLikes } from "../Api's/postsAPI";

const Card = ({ data }) => {
  const { homeDatas, setHomeDatas, userDetails } = useStateContext();
  const [visible, setVisible] = useState(false);

  const handleLikes = async (id) => {
    const newHomeDatas = homeDatas?.map((item) => {
      if (item?._id === id) {
        const findIndexItem = item?.likes?.findIndex(
          (like) => like === userDetails?.userId
        );

        if (findIndexItem !== -1) {
          item.likes.splice(findIndexItem, 1);
        } else {
          item.likes.push(userDetails?.userId);
        }

        return item;
      }
      return item;
    });

    // Call the API to update likes on the server
    const res = await getPostLikes({
      id: id, // Ensure the correct ID is sent
      like_id: userDetails?.userId,
    });

    if (res) {
      console.log(newHomeDatas);
      setHomeDatas(newHomeDatas); // Update the state with the new data
    }
  };

  return (
    <div className=" md:p-2 ">
      <ProCard className="card rounded-xl  bg-gray-50  ">
        {/* card header */}
        <div className="md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar
              className="border-gray-50 bg-gray-200 border-dashed border-inherit border-2 p-1 w-[50px] h-[50px]"
              src={
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              }
            />
            <div>
              <h2 className="text-[16px] font-bold">vinoth</h2>
              <p className="text-[12px]" title={data?.title}>
                {data?.title?.length > 88
                  ? data?.title?.substring(0, 89) + "..."
                  : data?.title || ""}
              </p>
            </div>
          </div>
          <CiCircleMore fontSize={30} className="cursor-pointer" />
        </div>

        {/* card post */}
        <div className=" w-[100%]  md:px-6 mt-2 ">
          {data?.postType === "video" && (
            <div className="cursor-pointer relative playbtn">
              <img
                onClick={() => setVisible((prev) => !prev)}
                src={data?.thumbnail || ""}
                width={"100%"}
                height={"100%"}
              />
              <div
                onClick={() => setVisible((prev) => !prev)}
                className=" absolute bg-[rgba(0,0,0,0.5)] w-full h-full transi left-[50%]  top-[50%] transform -translate-y-[50%] -translate-x-[50%]"
              >
                <span
                  title="Play Video"
                  className="flex items-center justify-center h-full"
                >
                  <PlayCircleOutlined
                    style={{ fontSize: "100px", color: "white" }}
                  />
                </span>
              </div>
            </div>
          )}
          {data?.postType === "video" ? (
            <Image
              width={"100%"}
              height={"100%"}
              style={{
                borderRadius: "10px",
                display: data?.postType === "video" ? "none" : "block",
              }}
              preview={{
                visible: visible,
                destroyOnClose: true,
                imageRender: () => (
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: " 100%",
                      border: "none",
                    }}
                    src={data?.post || ""}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                ),
                onVisibleChange: (value) => {
                  setVisible(value);
                },
                toolbarRender: () => null,
              }}
              src={data?.thumbnail || ""}
            />
          ) : (
            <Image
              width={"100%"}
              height={"100%"}
              style={{
                borderRadius: "10px",
              }}
              src={data?.post || ""}
            />
          )}
        </div>

        {/* card footer */}
        <div className="mt-2  md:px-6 ">
          <span className="flex items-center gap-2">
            {!data?.likes?.some((li) => li === userDetails?.userId) ? (
              <BsBalloonHeart
                onClick={() => handleLikes(data?._id)}
                fontSize={25}
                className="cursor-pointer"
              />
            ) : (
              <BsBalloonHeartFill
                onClick={() => handleLikes(data?._id)}
                fontSize={25}
                color="red"
                className="cursor-pointer"
              />
            )}
            <MdOutlineModeComment fontSize={25} className="cursor-pointer" />
          </span>

          {data?.likes?.length > 0 && (
            <div className="mt-3 flex items-center gap-2">
              <Avatar.Group
                size="small"
                max={{
                  count: 3,
                  style: {
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer",
                  },
                  popover: { trigger: "none" },
                }}
              >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>

                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />

                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
              <p>
                Liked by <span className="font-bold">uday_mani24</span> and{" "}
                <span className="font-bold">others</span>
              </p>
            </div>
          )}
        </div>
      </ProCard>
    </div>
  );
};

export default Card;
