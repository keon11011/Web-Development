import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { subDays } from "date-fns";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js/auto";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);



const LineChart = () => {
    const options = {
        responsive:true,
        plugins:{
                legend: {
                    display: false,
                    
                },
        },
        scales: {
            y: {
                ticks: {
                    fontSize: 100
                }
            },
        }
    }

    const [currentDate, setCurrentDate] = useState(new Date());

    const LineChartData = {
        labels: [
            subDays(currentDate, 7).getDate() + "/" + ( subDays(currentDate, 7).getMonth() + 1),
            subDays(currentDate, 6).getDate() + "/" + ( subDays(currentDate, 6).getMonth() + 1),
            subDays(currentDate, 5).getDate() + "/" + ( subDays(currentDate, 5).getMonth() + 1),
            subDays(currentDate, 4).getDate() + "/" + ( subDays(currentDate, 4).getMonth() + 1),
            subDays(currentDate, 3).getDate() + "/" + ( subDays(currentDate, 3).getMonth() + 1),
            subDays(currentDate, 2).getDate() + "/" + ( subDays(currentDate, 2).getMonth() + 1),
            subDays(currentDate, 1).getDate() + "/" + ( subDays(currentDate, 1).getMonth() + 1),
        ],
        datasets: [
            {
                label: "Doanh thu",
                data: [1,3,4,2,6,7,8],
                spanGaps:true,
                borderColor: "rgb(92, 118, 255)",
                backgroundColor:"rgb(92, 118, 255)",
                borderJoinStyle:"round",
                borderWidth:5,
                hoverBackgroundColor: "rgb(255,255,255)", 
                hoverBorderDashOffset:3
            },
        ],
    };
    return (
        <div className="w-full h-full ">
            <div className="text-primary flex flex-row items-center pb-3">
                <div className="font-bold">Số lượng Lead trong 7 ngày qua</div>
                
            </div>
            <Line options={options} data={LineChartData} ></Line>
        </div>
    )
};

export default LineChart;
