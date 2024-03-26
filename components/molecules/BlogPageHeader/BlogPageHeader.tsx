import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

export default function BlogPageHeader() {
  return (
    <Container component="section" sx={{ p: 4 }}>
      <Stack>
        <Typography variant="h1" color="primary">
          Blogs
        </Typography>
        <Typography variant="h2" color="text.secondary" sx={{ pt: 1 }}>
          Search for the post that interests you
        </Typography>
        <Box component="div" sx={{ pt: 2 }}>
          <FormControl variant="standard" hiddenLabel={true}>
            <OutlinedInput
              id="search"
              placeholder="React Js"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Stack>
    </Container>
  );
}
