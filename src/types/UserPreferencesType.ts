import { z } from "zod";

const numberRequirements = (fieldName: string) =>
  z.number({
    required_error: `${fieldName} is required`,
    invalid_type_error: `${fieldName} must be a number`,
  });

export const formSchema = z.object({
  height: numberRequirements("height"),
  weight: numberRequirements("weight"),
  experienceLevel: numberRequirements("experienceLevel"),
  goal: z
    .string({
      required_error: "goal is required",
      invalid_type_error: "you must choose a goal",
    })
    .nonempty({ message: "goal is required!" }),
  planLengthPreference: numberRequirements("planLengthPreference"),
  workoutsPerWeek: numberRequirements("workoutsPerWeek"),
});
type UserPreferencesType = z.infer<typeof formSchema>;
export default UserPreferencesType;
