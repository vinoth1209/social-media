import { ProCard } from "@ant-design/pro-components";
import Card from "./Card";
import Status from "./status/Status";
import "./home.css";
import { useEffect, useState } from "react";
import { getHomePosts } from "../Api's/postsAPI";
import { useStateContext } from "../context/Context";

const Home = () => {
  const { homeDatas, setHomeDatas } = useStateContext();

  useEffect(() => {
    const postFun = async () => {
      try {
        const res = await getHomePosts();
        setHomeDatas(res || []);
      } catch (error) {
        console.error(error);
      }
    };
    postFun();
  }, []);

  return (
    <>
      <div className="">
        <ProCard className="card min-h-screen h-[100%] rounded-none  md:p-2 ">
          {homeDatas?.length > 0 &&
            homeDatas?.map((data, idx) => {
              return <Card key={idx} data={data} />;
            })}
        </ProCard>
      </div>
      <ProCard className="status mr-10 bg-gray-50 my-8 h-full card min-h-screen rounded-xl min-w-[400px]  md:p-2 ">
        <Status />
      </ProCard>
    </>
  );
};

export default Home;
