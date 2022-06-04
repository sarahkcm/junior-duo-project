import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material/";
import UpdateIcon from "@mui/icons-material/Update";
import { getMyGames, getGames, updateC, updateR } from "../../api/api.js";

function Row({ game }) {

  const [gameCondition, setGameCondition] = React.useState(game.gameCondition)
  console.log(gameCondition)
  const [region, setRegion] = React.useState(game.region);
  console.log(region)

  const handleChange = (event) => {
    setGameCondition(event.target.value);
    console.log(gameCondition,"game cond")
  };

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  }

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Game List
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Condition</TableCell>
                  <TableCell align="right">Region</TableCell>
                  <TableCell align="right">price ($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={game.gameTitle}>
                  <TableCell component="th" scope="row">
                    {game.gameTitle}
                  </TableCell>
                  <Box sx={{ minWidth: 120 }}>
                    <button onClick={() => updateC(game._id, {gameCondition})}><UpdateIcon/></button>
                    {console.log(game._id)}
                    {console.log(gameCondition,"update Condition")}
                    <FormControl fullWidth>
                      <InputLabel id="select-label">Condition</InputLabel>
                      <Select
                        labelId="select-label"
                        label="Conditon"
                        value={gameCondition}
                        onChange={(e)=>handleChange(e)}>
                        <MenuItem value={"mint"} >
                          Mint
                        </MenuItem >
                        <MenuItem value={"Medium"}>
                          Medium
                        </MenuItem>
                        <MenuItem value={"Mediocre"}>
                          Mediocre
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <TableCell align="right">{game.region}</TableCell>
                  <button onClick={() => updateR(game._id, {region})}><UpdateIcon/></button>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="select-label">Region</InputLabel>
                      <Select
                        labelId="select-label"
                        value={region}
                        label="Region"
                        onChange={(e)=>handleChangeRegion(e)}>
                        <MenuItem value={"EU"}>EU</MenuItem>
                        <MenuItem value={"USA"}>US</MenuItem>
                        <MenuItem value={"JAP"}>JAP</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState("female");
  const [owned, setOwned] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    let ow = data
      .filter((e) => {
        return e.owned === true;
      })
      .map((e) => {
        return e.gameTitle;
      });
  };

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getMyGames()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("Error fetching", err);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>AllFullSet</TableCell>
            <RadioGroup
              row
              aria-labelledby="controlled-radio-buttons-group"
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <TableCell align="right">
                <FormControlLabel
                  value="Owned"
                  control={<Radio />}
                  label="Owned"
                  onClick={() => handleClick}
                />
              </TableCell>
              <TableCell align="right">
                <FormControlLabel
                  value="Missed"
                  control={<Radio />}
                  label="Missed"
                  onClick={() => handleClick}
                />
              </TableCell>
            </RadioGroup>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((game) => {
            return <Row game={game} key={game.gameTitle} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
