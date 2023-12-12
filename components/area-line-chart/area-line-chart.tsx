// apex chart
import Chart from "react-apexcharts";
//style
import { ChartContainer } from "./area-linne-chart.styled";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

type Props = {
  dataX: [];
  dataY: [];
  chartType: "area" | "line";
};

const AreaLineChart = ({ dataX, dataY, chartType }: Props) => {
  return (
    <ChartContainer>
      <Chart
        type={chartType}
        height={300}
        width="100%"
        series={[
          {
            name: "Commits",
            data: dataY,
          },
        ]}
        options={{
          chart: {
            toolbar: {
              show: false,
            },
          },
          colors: ["#f90000"],
          stroke: { width: 1, curve: "smooth" },
          dataLabels: { enabled: false },
          xaxis: {
            categories: dataX,
          },
          yaxis: {
            show: false,
          },
        }}
      />
    </ChartContainer>
  );
};

export default AreaLineChart;
