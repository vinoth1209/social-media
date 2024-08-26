import "./layouts.css";
import Home from "../home/Home";
import Sidebar from "./Sidebar";
const Layouts = () => {
  return (
    <section className="wrapper overflow-hidden ">
      <div className="sidebar">
        <Sidebar />
      </div>
      {/* <div className="header">
        <Sidebar />
      </div> */}

      <div className=" main min-h-screen h-[100%]  ">
        <Home />
      </div>

      {/* <div className="aside">aside</div> */}
    </section>
  );
};

export default Layouts;
