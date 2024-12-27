import HomepageStepper from "./HomepageStepper/HomepageStepper";
import Sidebar from "./Sidebar/Sidebar";

function Homepage() {
  return (
    <div className="flex bg-dark h-full">
      <Sidebar />
      <div className="flex w-full justify-center ">
        <HomepageStepper />
      </div>
    </div>
  );
}

export default Homepage;
