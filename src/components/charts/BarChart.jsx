import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect, useLayoutEffect } from "react";
const BarChart = (props) => {
  const { sty} = props;
  var date = new Date();
    date.setHours(0, 0, 0, 0);
    var value = 100;
    function generateData() {
        value = Math.round((Math.random() * 10 - 5) + value);
        am5.time.add(date, "day", 1);
        return {
          date: date.getTime(),
          value: value
        };
      }
      
      function generateDatas(count) {
        var data = [];
        for (var i = 0; i < count; ++i) {
          data.push(generateData());
        }
        return data;
      }
    useLayoutEffect(()=>{
        let root = am5.Root.new("barchartdiv");

        root.setThemes([
          am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            paddingLeft:0
          }));

          var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "zoomX"
          }));

          cursor.lineY.set("visible", false);
          
         
          var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            maxDeviation: 0,
            baseInterval: {
              timeUnit: "day",
              count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {
              minorGridEnabled:true,
              minorLabelsEnabled:true
            }),
            tooltip: am5.Tooltip.new(root, {})
          }));
          
          xAxis.set("minorDateFormats", {
            "day":"dd",
            "month":"MM"
          });
          
          
          var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {})
          }));
          
          
          // Add series
          // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
          var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {
              labelText: "{valueY}"
            })
          }));
          
          series.columns.template.setAll({ strokeOpacity: 0 })
          
          
          // Add scrollbar
          // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
          chart.set("scrollbarX", am5.Scrollbar.new(root, {
            orientation: "horizontal"
          }));
          
          var data = generateDatas(30);
          series.data.setAll(data);
          
          
          // Make stuff animate on load
          // https://www.amcharts.com/docs/v5/concepts/animations/
          series.appear(1000);
          chart.appear(1000, 100);

          return () => {
            root.dispose();
          };

    },[])
    return (
        <div id="barchartdiv" style={sty}></div>
      );
}

export default BarChart;
