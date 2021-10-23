import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ExploreCard from "../components/ExploreCard";
import "../style/ExplorePage.css";
import bag from "../assets/bag.png";
import coin from "../assets/coin.png";
import cc from "../assets/creditcard.png";
const ExplorePage = () => {
  return (
    <div className="explore">
      <Typography
        variant="h3"
        sx={{ fontWeight: "bolder", textAlign: "left", margin: "50px" }}
      >
        Quick Lessons
      </Typography>
      <Stack direction="row">
        <ExploreCard img={bag} desc="The guide to saving in college" id="101" />
        <ExploreCard img={coin} desc="Budgeting 101" id="102" />
      </Stack>
      <Stack>
        <ExploreCard img={cc} desc="All about credit card" />
      </Stack>
    </div>
  );
};

export default ExplorePage;
