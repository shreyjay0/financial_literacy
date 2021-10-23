import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { LinearProgress } from "@mui/material";

const Lesson = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        borderRadius: 12,
        background: "#fff",
        filter: "drop-shadow(0px 3px 20px rgba(0, 0, 0, 0.09))",
        width: "40%",
        padding: 8,
        margin: 3,
      }}
    >
      <Box sx={{ width: "80%" }}>
        <LinearProgress variant="buffer" value={progress} />
      </Box>
    </Box>
  );
};

Lesson.propTypes = {};

export default Lesson;
