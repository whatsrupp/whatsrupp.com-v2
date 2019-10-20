import axios from 'axios';
import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import echarts from 'echarts';

const ChartContainer = styled.div`
    height: 100%;
    width: 90vmin;
  
`;

const Chart = () => {

    const chartContainerRef = useRef(null);
    const [data, setData] = useState(null);
    
      useEffect(()=>{
          const getData = async ()=>{
              const result = await axios.get('http://localhost:3001')
              setData(result.data)
          }
          getData();
      }, [])


    useEffect(() => {
        if (!chartContainerRef) return;
        const chart = echarts.init(chartContainerRef.current)
        const padding  = "50px"
        const legendPadding = "100px"
        chart.setOption({
            grid:{
                left: padding,
                right: legendPadding,
                top: padding,
                bottom: padding,
            },
          
            xAxis: {name: 'x coordinate (km)',
            nameLocation: 'center',
            nameGap: 30,
            splitLine: {show: false},
            min: 0,
            max: 100,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#fff'
                }
            }},
                  
            yAxis:{name: 'y coordinate (km)',
            nameGap: 30,

            nameLocation: 'center',
            nameRotate: 90,
            min: 0,
            max: 100,
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#fff'
                }
            }},
            visualMap: [{
                type: 'piecewise',
                dimension: 3,
                textStyle: {
                    color: '#fff'
                },
                orient: 'vertical',
                right: 0,

                top: padding,
                // top: '10%',
                // padding: "10px",
                pieces: [
                    {min: 0, max: 5, label: "0 - 5%" },
                    {min: 5, max: 25, label: "5 - 25%"},
                    {min: 25, max: 75, label: "25 - 75%"},
                    {min: 75, max: 95, label: "75 - 95%"},
                    {min: 95, max: 100, label: "95 - 100%"}
                ],
               
            }],
            tooltip: {
          
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: ({data})=>{
                    const [x,y,price,percentile] = data;
                    const templateString = `Coordinates: (${x}, ${y})<br/>Price: £${price}<br/> Percentile: ${percentile.toFixed(2)}%`
                    return templateString
                }
            },
            series: [{
                name: 'Land Prices',

                symbolSize: 7,
                data,

               
                type: 'scatter'
            }]})

      }, [chartContainerRef, data]);
    

    return(
        <ChartContainer ref={chartContainerRef} />
    )
}

export default Chart 


