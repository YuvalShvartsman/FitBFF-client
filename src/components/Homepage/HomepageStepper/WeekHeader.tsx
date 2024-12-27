import { FaInfoCircle } from "react-icons/fa";

import { Week } from "../../../types/Week";

type WeekHeaderProps = {
  week: Week;
};

function WeekHeader({ week }: WeekHeaderProps) {
  return (
    <div className="flex  h-[100px] w-full text-light bg-blue-200 shadow-lg rounded-xl first:mt-14 justify-between items-center p-10">
      <div className="flex flex-col  ">
        <span className=" font-extrabold text-xl">
          {"focus - " + week.title}
        </span>
        <span className=" font-bold">{"week - " + week.weekNum}</span>
      </div>
      <FaInfoCircle className=" cursor-pointer text-3xl " />
    </div>
  );
}

export default WeekHeader;
