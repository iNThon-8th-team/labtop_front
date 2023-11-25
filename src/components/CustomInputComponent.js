import { FormControl, Grid, OutlinedInput } from "@mui/material";

const CustomInputComponent = (props) => {
  const { value, hintText, setValue, id, multiline = false } = props;
  return (
    <Grid item margin={"5px"} xs>
      <FormControl fullWidth>
        <OutlinedInput
          size="small"
          placeholder={hintText}
          id={id}
          autoComplete="off"
          multiline={multiline}
          minRows={multiline ? 10 : 1}
          color="primary"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </FormControl>
    </Grid>
  );
};

export default CustomInputComponent;
