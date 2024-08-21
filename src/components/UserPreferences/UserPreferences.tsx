import "./UserPreferences.css";

import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";

function UserPreferences() {
  return (
    <Box className="PreferencesForm">
      <FormControl className="Form">
        <InputLabel className="Lables">Weight</InputLabel>
        <Input />
        <Button className="Button">submit</Button>
      </FormControl>
    </Box>
  );
}

export default UserPreferences;
