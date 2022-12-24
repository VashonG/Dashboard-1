//Daily visits
let barChartData = {
  type: "bar",
  gui:{ 
    contextMenu:{ 
      empty: true,
      button:{ 
        visible: false 
      } 
    } 
  },
  globals: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontColor: "#000",
    fontWeight: "500",
    
  },
  title: {
    visible: false,
  },
  legend: {
    visible: true,
      backgroundColor: 'transparent',
      borderColor: 'none',
      toggleAction: "hide",
      adjustLayout: false,
      align: "center",
      item: {
        fontColor: "#000",
        fontSize: "11",
        padding: "5px",
        margin: "0px",
        y: "-22",
      },
      itemOff: {
        fontColor: "#000",
        fontSize: "11",
        padding: "5px",
        margin: "0px",
        y: "-22",
      },
      marker: {
        cursor: "none",
        type: "circle",
        size: "4",
        offsetX: "8"
      }
  },
  plotarea: {
    margin: "25px 5px 20px 31px",
    height: "95%",
    backgroundColor: "transparent"
  },
  plot: {
    barWidth: "80%",
    borderRadius: 3,
    barSpace: 0,
    
    tooltip: {
      backgroundColor: "#000",
      
      paddingTop: "8%",
      paddingRight: "10px",
      paddingBottom: "8%",
      paddingLeft: "11px",
      borderColor: "#000",
      borderWidth: 0,
      borderRadius: 4,
      lineHeight: 17,
      fontFamily: "Inter",
      text: "%t <br> %v",
      textAlign: "center",
      shadow: false,
      fontColor: "#ffffff",
      
    },
  },
  scaleX: {
    lineWidth: 0,
    tick: {
      visible: false,
    },
    labels: ["9:00", "11:00", "13:00", "15:00", "17:00"],
  },
  scaleY: {
    lineWidth: 0,
    values: "0:750:250",
    tick: {
      visible: false,
    },
    guide: {
      lineStyle: "dashed",
      lineColor: "#EBEBEB",
    },
  },
  series: [
    {
      values: [500, 450, 550, 750, 660],
      backgroundColor: "#624CE0",
      text: "Mobile browsers",
      
    },
    {
      values: [300, 180, 250, 510, 300],
      backgroundColor: "#20C933",
      text: "Desktop",
    },
  ],
};
zingchart.render({
  id: "visitChart",
  data: barChartData,
  height: "230",
  width: "100%",
});
//Daily visits
