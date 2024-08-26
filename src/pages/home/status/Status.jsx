import { Avatar, Typography } from "antd";
import "./status.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";

const Status = () => {
  const avatars = Array(18).fill(
    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  );

  return (
    <div className=" rounded-3xl ">
      <div className="mb-2 text-xl text">Stories</div>
      <ProCard className="my-3 ml-0 rounded-3xl transform hover:scale-105 cursor-pointer shadow-sm  hover:shadow-md">
        <div className=" flex items-center gap-4 ">
          <div className="relative  cursor-pointer ">
            <Avatar
              className=" border-gray-300   border-dashed border-inherit border-[5px] p-1 w-[80px] h-[80px]"
              src={""}
            />
            <PlusCircleOutlined
              className=" absolute z-10 p-5 backdrop-blur-[2px] rounded-full left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]"
              style={{
                fontSize: 30,
                color: "white",
                backgroundColor: "rgba(247,89,171,0.2)",
              }}
            />
          </div>
          <p className="text-center">You</p>
        </div>
      </ProCard>

      {avatars.map((src, index) => (
        <ProCard
          key={index}
          className="my-3 rounded-3xl transform hover:scale-105 cursor-pointer shadow-sm  hover:shadow-md"
        >
          <div className=" flex items-center gap-4 ">
            <Avatar
              className="border-gray-300 border-dashed border-inherit border-2 p-1 w-[80px] h-[80px]"
              src={src}
            />
            <p className="text-center">vinoth</p>
          </div>
        </ProCard>
      ))}
    </div>
  );
};

export default Status;
