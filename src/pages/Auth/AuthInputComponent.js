import { OutlinedInput, FormControl, Grid, InputLabel } from "@mui/material";

const AuthInputComponent = (props) => {
  const {
    value,
    label,
    isSecret = false,
    setValue,
    handleSubmit = () => {},
  } = props;
  return (
    <Grid item margin={"5px"}>
      <FormControl fullWidth>
        <InputLabel htmlFor={label + "-input"}>{label}</InputLabel>
        <OutlinedInput
          label={label}
          id={label + "-input"}
          type={isSecret ? "password" : "text"}
          autoComplete="off"
          color="primary"
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") handleSubmit();
          }}
          value={value}
          required
        />
      </FormControl>
    </Grid>
  );
};

export default AuthInputComponent;
