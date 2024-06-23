import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";

const Message = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box margin="0 4%">
      <Header title="Câu hỏi" subtitle="Thường gặp" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
            fontSize="1.5rem"
          >
            Triệu chứng của COVID-19 là gì?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextareaAutosize
            aria-label=""
            minRows={3}
            placeholder="Thêm câu trả lời từ bác sĩ."
            defaultValue="Một số triệu chứng thường gặp bao gồm sốt, ho và khó thở. Một số người cũng có thể gặp mệt mỏi, đau cơ thể, mất vị giác hoặc mùi, đau họng, hoặc tiêu chảy."
            style={{
              width: "100%",
              fontSize: "1rem",
              color: theme.palette.text.primary,
              backgroundColor: "transparent",
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color="greenAccent"
            variant="h5"
            fontWeight="bold"
            fontSize="1.5rem"
          >
            Có những triệu chứng nào phổ biến của COVID-19?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextareaAutosize
            aria-label=""
            minRows={3}
            color="greenAccent"
            placeholder="Thêm câu trả lời từ bác sĩ."
            style={{
              width: "100%",
              fontSize: "1rem",
              color: theme.palette.text.primary,
              backgroundColor: "transparent",
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color="greenAccent"
            variant="h5"
            fontWeight="bold"
            fontSize="1.5rem"
          >
            Làm thế nào để phòng ngừa lây nhiễm COVID-19?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextareaAutosize
            aria-label=""
            minRows={3}
            color={colors.primary[100]}
            placeholder="Thêm câu trả lời từ bác sĩ."
            style={{
              width: "100%",
              fontSize: "1rem",
              color: theme.palette.text.primary,
              backgroundColor: "transparent",
            }}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Message;
