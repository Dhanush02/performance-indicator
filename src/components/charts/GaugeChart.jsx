import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const GaugeChart = (props) => {
    const {sty} = props;
    useLayoutEffect(()=>{
        var root = am5.Root.new("gaugechartdiv"); 

        root.setThemes([
        am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(
        am5radar.RadarChart.new(root, {
            panX: false,
            panY: false,
            startAngle: -180,
            endAngle: 0,
            innerRadius: -26
        })
        );

        var axisRenderer = am5radar.AxisRendererCircular.new(root, {
        strokeOpacity: 0.1,
        minGridDistance: 30
        });

        axisRenderer.ticks.template.setAll({
        visible: true,
        strokeOpacity: 0.5
        });

        axisRenderer.grid.template.setAll({
        visible: false
        });

        var axis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
            maxDeviation: 0,
            min: 0,
            max: 100,
            strictMinMax: true,
            renderer: axisRenderer
        })
        );

        function createRange(start, end, color, label) {
        
        var rangeDataItem = axis.makeDataItem({
            value: start,
            endValue: end
        });

        var range = axis.createAxisRange(rangeDataItem);
        
        rangeDataItem.get("axisFill").setAll({
            visible: true,
            fill: color,
            fillOpacity: 0.8
        });
        
        rangeDataItem.get("tick").setAll({
            visible: false
        });
        
        rangeDataItem.get("label").setAll({
            text: label,
            inside: true,
            radius: 8,
            fontSize: "0.9em",
            fill: am5.color(0xffffff)
        });

        }

        createRange(0, 70, am5.color(0x297373), "Safe");
        createRange(70, 90, am5.color(0x946B49), "Warning");
        createRange(90, 100, am5.color(0xff621f), "Danger");

        // Add clock hand
        var handDataItem = axis.makeDataItem({
        value: 0
        });

        var hand = handDataItem.set("bullet", am5xy.AxisBullet.new(root, {
        sprite: am5radar.ClockHand.new(root, {
            radius: am5.percent(99)
        })
        }));

        axis.createAxisRange(handDataItem);

        handDataItem.get("grid").set("visible", false);
        handDataItem.get("tick").set("visible", false);

        setInterval(() => {
        handDataItem.animate({
            key: "value",
            to: Math.round(Math.random() * 100),
            duration: 800,
            easing: am5.ease.out(am5.ease.cubic)
        });
        }, 2000);
        return () => {
            root.dispose();
          };    
    }, [])
    return (
        <div id="gaugechartdiv" style={sty}></div>
    )
}
export default GaugeChart;