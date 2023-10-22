import React from 'react';
import '../static/style/chart.css'
import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const options = {
        indexAxis: 'x',
        y: {
            min: 0,
            max: 5,
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Activities',
            },
        },
    };

    const [data, setData] = useState({
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
            {
                label: 'Guest',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(25, 90, 13, 0.5)',
            },
            {
                label: 'User',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://jsonplaceholder.typicode.com/comments'
            const dataSet1 = [];
            const dataSet2 = [];
            await fetch(url).then((data) => {
                // console.log("Api data", data)
                const res = data.json();
                return res
            }).then((res) => {
                console.log("api data", res)
                for (const val of res) {
                    dataSet1.push(val.id);
                    dataSet2.push(val.postId)
                    // labelSet.push(val.name)
                }
                setData({
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [
                        {
                            label: 'Guest',
                            data: dataSet1,
                            backgroundColor: '#ee8484',
                        },
                        {
                            label: 'User',
                            data: dataSet2,
                            backgroundColor: '#98d89e',
                        },
                    ],
                })
                // console.log("arrData", dataSet1, dataSet2)
            }).catch(e => {
                console.log("error", e)
            })
        }

        fetchData();
    }, [])
    return (
        <div className='chartjs'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default Chart
