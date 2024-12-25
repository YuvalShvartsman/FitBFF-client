import { FaInfoCircle } from "react-icons/fa";

import Tooltip from "../../shared/Tooltip";

import { Week } from "../../../types/Week";

type WeekHeaderProps = {
  week: Week;
};

function WeekHeader({ week }: WeekHeaderProps) {
  return (
    <div className="relative flex items-center justify-center h-[12vh] w-full text-light bg-blue-900 shadow-lg rounded">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="absolute top-5 left-5 font-bold">
          {"week - " + week.weekNum}
        </span>
        <span className="absolute bottom-5 left-5 font-extrabold text-xl">
          {"focus - " + week.title}
        </span>
        <div className="absolute right-5">
          <Tooltip content={week.desc} position="bottom" width="30rem">
            <FaInfoCircle className="cursor-pointer text-3xl" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default WeekHeader;
