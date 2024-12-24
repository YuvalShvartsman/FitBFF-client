import DescriptionIcon from "@mui/icons-material/Description";

import { Week } from "../../../../types/Week";
import Tooltip from "../../../shared/Tooltip";

type WeekHeaderProps = {
  week: Week;
};

function WeekHeader({ week }: WeekHeaderProps) {
  return (
    <div className="relative flex items-center justify-center h-[12vh] w-full text-light bg-blue-900 shadow-lg rounded">
      <span className="absolute top-5 left-5 font-bold">
        {"week - " + week.weekNum}
      </span>
      <span className="absolute bottom-5 left-5 font-extrabold text-xl">
        {"focus - " + week.title}
      </span>
      <Tooltip content={week.desc} position="bottom">
        <span className="absolute right-5 font-extrabold text-xl cursor-pointer">
          <DescriptionIcon />
        </span>
      </Tooltip>
    </div>
  );
}

export default WeekHeader;
