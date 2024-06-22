import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import Header from "../../components/Header";
import generalData from "../../data/mockData";
import { ColorModeContext, tokens } from "../../theme";

const Patient = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const ColorMode = useContext(ColorModeContext);

  const columns = [
    { field: "id", headerName: "Mã bảo hiểm", flex: 1 },
    { field: "firstName", headerName: "Tên", flex: 1, cellClassName: "name-coumn--cell", },
    { field: "lastName", headerName: "Họ", flex: 1 },
    { field: "sex", headerName: "Giới tính", flex: 1 },
    { field: "dateOfBirth", headerName: "Ngày sinh", flex: 1 },
    { field: "location", headerName: "Địa chỉ", flex: 1 },
    { field: "diseases", headerName: "Bệnh lý", flex: 1},
    { field: "enteredHospital", headerName: "Ngày nhập viện", flex: 1},
    { field: "leftHospital", headerName: "Ngày xuất viện", flex: 1},
  ];

  return (
    <Box margin="0 4%">
      <Header title="Thông tin" subtitle="Bệnh nhân" />
      <Box sx={{
      width: "100%",
      height: "20%",
    }}>
        <DataGrid rows={generalData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Patient;
