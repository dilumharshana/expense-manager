import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/system";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const NewExpenseModal = ({ newExpenseData,selectedId,isUpdateMode }) => {

 
  const data = {
    type: newExpenseData?.type,
    description: newExpenseData?.description,
    amount: newExpenseData?.amount,
    date: newExpenseData?.date,
  };

  const handleSave = async () => {
    try {

      if(data.amount === null ||data.amount === ""){
        return alert("Please add Amount of the expense !")
      }

      const headers = {
        "Content-Type": "application/json",
        "X-Auth-Token": "97e0d315477f435489cf04904c9d0e6co",
      };

      const response = await axios.post(
        "http://localhost:8070/api/expense",
        data,
        {
          headers,
        }
      );

      if(response?.message){
        return alert("Something went wrong !")
      }

      newExpenseData?.setExpenseList([
        ...newExpenseData?.expenseList,
        response?.data?.data,
      ]);

      newExpenseData?.handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "X-Auth-Token": "97e0d315477f435489cf04904c9d0e6co",
      };

      const response = await axios.put(
        `http://localhost:8070/api/expense/${selectedId}`,
        data,
        {
          headers,
        }
      );

      const updatedItem = newExpenseData?.expenseList?.map((exp) => {
        return exp?._id === selectedId ? data : exp;
      });

      newExpenseData?.setExpenseList(updatedItem);

      newExpenseData?.handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        open={newExpenseData?.open}
        onClose={newExpenseData?.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new expense
          </Typography>

          <Stack
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            spacing={2}
          >
            <TextField
              placeholder="Expense type"
              value={newExpenseData?.type}
              onChange={(e) => newExpenseData?.setType(e.target.value)}
            />
            <TextField
              placeholder="Expense Description"
              value={newExpenseData?.description}
              onChange={(e) => newExpenseData?.setDescription(e.target.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Basic example"
                value={newExpenseData.date}
                onChange={(newValue) => {
                  newExpenseData.setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <TextField
              placeholder="Amount"
              value={newExpenseData?.amount}
              onChange={(e) => newExpenseData?.setAmount(e.target.value)}
            />
          </Stack>
          <Stack direction="row" justifyContent="end" spacing={2}>
            <Button variant="outlined" onClick={newExpenseData?.handleClose}>
              close
            </Button>
            <Button
              variant="contained"
              onClick={isUpdateMode === true ? handleUpdate : handleSave}
            >
              save
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
