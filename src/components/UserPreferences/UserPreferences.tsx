import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserState } from "../../redux/userSlice";

import { Box, Button, TextField } from "@mui/material";

import instance from "../../axiosInstance";

import { UserPreferencesType } from "../../types/UserPreferencesType";
import "./UserPreferences.css";

function UserPreferences() {
  const state = useSelector((state: { user: UserState }) => state);

  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserPreferencesType>({
    height: 0,
    weight: 0,
    experienceLevel: 0,
    goal: "Muscle Gain",
    planLengthPreference: 0,
    workoutsPerWeek: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await instance.post("/userPreferences/submitUserData", {
        formData,
        id: state.user.user.googleId,
      });

      navigate("/homepage");
    } catch (error) {}
  };

  return (
    <Box className="PreferencesForm">
      <TextField
        label="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="experienceLevel"
        name="experienceLevel"
        value={formData.experienceLevel}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="goal"
        name="goal"
        value={formData.goal}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="planLengthPreference"
        name="planLengthPreference"
        value={formData.planLengthPreference}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="workoutsPerWeek"
        name="workoutsPerWeek"
        value={formData.workoutsPerWeek}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}
export default UserPreferences;
