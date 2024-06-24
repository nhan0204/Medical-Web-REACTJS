import { useTheme } from "@mui/material";
import { PointTooltipProps, ResponsiveLine } from "@nivo/line";
import { FC } from "react";
import { patientTreatmentData as data } from "../data/mockData";
import { tokens } from "../theme";



const LineChart: FC<any> = ({ isDashboard }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const CustomTooltip: React.FC<PointTooltipProps> = ({ point }) => (
    <div style={{ color: colors.primary[500], backgroundColor: 'white', padding: '5px', borderRadius: '3px' }}>
        <strong>{point.data.x}</strong>: {`${point.data.y}%`}
    </div>
  );

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
      }}
      colors= { isDashboard? {datum: "color"} : { scheme: "nivo"} }
      
      margin={{ top: 8, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: undefined,
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickValues: 5,
        tickPadding: 2,
        tickRotation: 0,
        legend: undefined,
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
        format: (value) => `${value}%`
      }}
      enableGridX={false}
      lineWidth={4}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      areaOpacity={0.05}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={CustomTooltip}
    />
  );
};

export default LineChart;
