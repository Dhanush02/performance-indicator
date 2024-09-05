import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5percent from "@amcharts/amcharts5/percent";
import { PieSeries } from "@amcharts/amcharts5/.internal/charts/pie/PieSeries";
import { PieChart } from "@amcharts/amcharts5/.internal/charts/pie/PieChart";
import { useLayoutEffect } from "react";


const DonutChart = (props) => {
  const {sty} = props;
    useLayoutEffect(()=>{
        var root = am5.Root.new("donutchartdiv");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(PieChart.new(root, {
          layout: root.verticalLayout,
          innerRadius: am5.percent(50)
        }));
        
        
        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
          alignLabels: false
        }));
        
        series.labels.template.setAll({
          textType: "circular",
          centerX: 0,
          centerY: 0
        });
        
        
        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([
          { value: 10, category: "One" },
          { value: 9, category: "Two" },
          { value: 6, category: "Three" },
          { value: 5, category: "Four" },
          { value: 4, category: "Five" },
        ]);
        
        
        // Create legend
        // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
        var legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          marginTop: 15,
          marginBottom: 15,
        }));
        
        legend.data.setAll(series.dataItems);
        
        
        // Play initial series animation
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
        series.appear(1000, 100);
        return () => {
            root.dispose();
          };        
    }, [])
    return (
        <div id="donutchartdiv" style={sty}></div>
    )
}

export default DonutChart;
