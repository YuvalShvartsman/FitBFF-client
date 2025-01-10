import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserState } from "../../redux/userSlice";

import { Autocomplete, Box, Button, TextField } from "@mui/material";

import instance from "../../axiosInstance";

import UserPreferencesType from "../../types/UserPreferencesType";

import formSchema from "../../types/formSchema.ts";

import Swal from "sweetalert2";

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
    const { name, value, type } = e.target;
    const parsedValue = type === "number" ? Number(value) : value;
    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = async () => {
    const a = formSchema.safeParse(formData);
    try {
      if (a.success) {
        await instance.post("/userPreferences/submitUserData", {
          formData,
          id: state.user.user._id,
        });
        Swal.fire({
          title: "data submission completed",
          text: "You logged in!",
          icon: "success",
        });
        navigate("/homepage");
      } else {
        let errors = "";
        for (let index = 0; index < a.error.errors.length; index++) {
          errors += a.error.errors[index].message + " \n";
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: "<pre>" + errors + "</pre>",
        });
      }
    } catch (error) {}
  };

  return (
    <div className="bg-blue-100 flex h-4/5 w-1/4 self-center rounded-xl flex-col justify-around items-center">
      <TextField
        label="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
        variant="outlined"
        type="number"
        fullWidth
      />
      <TextField
        label="weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        variant="outlined"
        type="number"
        fullWidth
      />
      <TextField
        label="experienceLevel"
        name="experienceLevel"
        value={formData.experienceLevel}
        onChange={handleChange}
        variant="outlined"
        type="number"
        fullWidth
      />
      <Autocomplete
        disablePortal
        options={["Muscle Gain", "Endurance", "Recovery", "Power Lifting"]}
        onChange={(_e, a) => {
          setFormData((prev) => ({
            ...prev,
            goal: a || "",
          }));
        }}
        renderInput={(params) => (
          <TextField {...params} label="goal" name="goal" />
        )}
        value={formData.goal}
        fullWidth
      />

      <TextField
        label="planLengthPreference"
        name="planLengthPreference"
        value={formData.planLengthPreference}
        onChange={handleChange}
        variant="outlined"
        type="number"
        fullWidth
      />
      <TextField
        label="workoutsPerWeek"
        name="workoutsPerWeek"
        value={formData.workoutsPerWeek}
        onChange={handleChange}
        variant="outlined"
        type="number"
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
    </div>
  );
}
export default UserPreferences;
