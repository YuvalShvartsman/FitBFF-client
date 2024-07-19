import { Week } from "../../../../types/Week";

import "./WeekHeader.css";

import { Box, Typography, Tooltip } from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";

type WeekHeaderProps = {
  week: Week;
};

function WeekHeader({ week }: WeekHeaderProps) {
  return (
    <Box className="WeekHeader">
      <Typography className="WeekNumber">{"week - " + week.weekNum}</Typography>
      <Typography className="WeekTitle">{"focus - " + week.title}</Typography>
      <Tooltip
        title={week.desc}
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "18px",
              padding: "10px",
              bgcolor: "#09008882",
              borderRadius: "20px", // sx is needed to get into the css of the Tooltip.
            },
          },
        }}
      >
        <Typography className="WeekDescription">
          <DescriptionIcon />
        </Typography>
      </Tooltip>
    </Box>
  );
}

export default WeekHeader;
