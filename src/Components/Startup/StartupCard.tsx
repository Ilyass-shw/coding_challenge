import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Startup } from "../../Types/Startup";

interface props {
  startup: Startup;
}
const StartupCard: React.FC<props> = ({ startup }) => {
  return (
    <div className="MuiGrid-item">
      <Card sx={{ margin: "auto ", marginTop: "20px" }}>
        <CardContent>
          <Typography
            variant="body2"
            sx={{ fontSize: 20, fontWeight: 600 }}
            gutterBottom
          >
            {startup.name}
          </Typography>
          <Typography
            sx={{ fontSize: 12, fontWeight: 400 }}
            color="text.secondary"
            gutterBottom
          >
            Founded {new Date(startup.dateFounded).getFullYear()} |{" "}
            {startup.employees} Employees | {startup.totalFunding}{" "}
            <span>&#36;</span> | {startup.currentInvestmentStage}
          </Typography>

          <Typography sx={{ mt: 3, fontWeight: 500 }} variant="body2">
            {startup.shortDescription}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default StartupCard;
