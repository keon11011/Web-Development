import React from "react";
import { Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);
const LineChart = () => {
    const options ={}
    const LineChartData = { 
        labels:[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        datasets:[
            {
                label: "Steps",
                data: [100,200,300,400,500,600,700],
                bordercolor: "rgb(75,192,192)",
            },
        ],
    };
    return (
    <div>
        <Line options={options} data = {LineChartData} ></Line>
        Line Chart
    </div>
    )
};

export default LineChart;
