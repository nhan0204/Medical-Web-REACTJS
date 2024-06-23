import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, TextareaAutosize, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../../theme";

import { useContext } from "react";
import Header from "../../components/Header";

const Message = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const ColorMode = useContext(ColorModeContext);
  
  return (
    <Box margin="0 4%">
      <Header title="Câu hỏi" subtitle="Thường gặp" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="bold" fontSize='1.5rem'>
            Triệu chứng của COVID-19 là gì? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TextareaAutosize
            aria-label=""
            minRows={3}
            placeholder="Thêm câu trả lời từ bác sĩ."
            defaultValue="Một số triệu chứng thường gặp bao gồm sốt, ho và khó thở. Một số người cũng có thể gặp mệt mỏi, đau cơ thể, mất vị giác hoặc mùi, đau họng, hoặc tiêu chảy."
            style={{ width: '100%', fontSize: '1rem'}}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="greenAccent" variant="h5" fontWeight="bold" fontSize='1.5rem'>
          Có những triệu chứng nào phổ biến của COVID-19?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextareaAutosize
            aria-label=""
            minRows={3}
            placeholder="Thêm câu trả lời từ bác sĩ."
            style={{ width: '100%', fontSize: '1rem'}}
          />
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="greenAccent" variant="h5" fontWeight="bold" fontSize='1.5rem'>
          Làm thế nào để phòng ngừa lây nhiễm COVID-19?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
      <TextareaAutosize
            aria-label=""
            minRows={3}
            placeholder="Thêm câu trả lời từ bác sĩ."
            style={{ width: '100%', fontSize: '1rem'}}
          />
      </AccordionDetails>
    </Accordion>
    </Box>
  );
};

export default Message;