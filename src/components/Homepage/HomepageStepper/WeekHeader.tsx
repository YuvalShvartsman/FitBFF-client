import { FaInfoCircle } from "react-icons/fa";

import { Week } from "../../../types/Week";

type WeekHeaderProps = {
  week: Week;
};

function WeekHeader({ week }: WeekHeaderProps) {
  return (
    <div className="relative h-[100px] w-[800px] text-light bg-blue-200 shadow-lg rounded-xl first:mt-16 ">
      <span className="absolute top-5 left-5 font-bold">
        {"week - " + week.weekNum}
      </span>
      <span className="absolute bottom-5 left-5 font-extrabold text-xl">
        {"focus - " + week.title}
      </span>
      <div className="absolute right-5 top-5">
        <FaInfoCircle className="cursor-pointer text-3xl " />
      </div>
    </div>
  );
}

export default WeekHeader;
