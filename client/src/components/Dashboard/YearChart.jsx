import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const BarChart = ({ data }) => {
  const years = {};

  data.forEach((entry) => {
    if (!years[entry.start_year]) {
      years[entry.start_year] = 0;
    }
    years[entry.start_year] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      "#FF0080",
      "#00BFFF",
      "#FFD700",
      "#32CD32",
      "#FF4500",
      "#9400D3",
      // Add more colors as needed
    ];
    return colors[index % colors.length];
  };

  const chartData = {
    labels: Object.keys(years),
    datasets: [
      {
        data: Object.values(years),
        backgroundColor: Object.keys(years).map((_, index) =>
          getRandomColor(index)
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
      },
    },
  };

  return (
    <Box
      p={6}
      borderRadius={20}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={100}
      ml={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700}
      overflow="hidden"
    >
      <Heading as="h2" mb={4}>
        Year
      </Heading>

      <Bar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default BarChart;
