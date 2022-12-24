//Revenue Chart
let linesConfig = {
  type: "area",
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
        offsetX: "8",
      }
  },
  plotarea: {
    margin: "25px 5px 35px 40px",
  },
  scaleX: {
    values: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    item: {
      color: "#000000",
      fontSize: 13,
    },
    tick: {
      visible: false,
    },
    lineColor: "#ebebeb",
    itemsOverlap: true,
    maxItems: 12,
    tick: {
      visible: false,
    },
  },
  scaleY: {
    values: "0:1000:250",
    visible: true,
    lineWidth: 0,
    itemsOverlap: true,
    maxItems: 5,

    tick: {
      visible: false,
    },
    guide: {
      lineStyle: "dashed",
    },
    item: {
      paddingRight: "10%",
      paddingBottom: "20%",
      color: "#000000",
      fontSize: 13,
    },
  },

  series: [
    {
      values: [500, 100, 200, 300, 400, 500, 80, 600, 180, 350, 250, 400],
      lineColor: "#624CE0",
      backgroundColor: "#624CE0",
      text: "Design",
    },

    {
      values: [200, 60, 200, 80, 700, 400, 200, 150, 80, 450, 250, 900],
      lineColor: "#FFA800",
      text: "Development",
      backgroundColor: "#FFA800",
      hoverState: {
        visible: true,
        shadow: true,
        backgroundColor: "rgba(255, 168, 0, 0.1)",
      },
      hoverMarker: {
        visible: true,
        backgroundColor: "#FFA800",
        type: "circle",
        size: 9,
        borderColor: "white",
        borderWidth: 4,
        offsetY: -2,
      },
    },
  ],

  plot: {
    aspect: "line",
    lineWidth: 3,
    lineStyle: "solid",
    lineColor: "#624CE0",
    marker: {
      visible: false,
    },
    hoverState: {
      visible: true,
      shadow: true,
      backgroundColor: "rgba(98, 76, 224, 0.1)",
    },
    hoverMarker: {
      visible: true,
      backgroundColor: "#624CE0",
      type: "circle",
      size: 9,
      borderColor: "white",
      borderWidth: 4,
      offsetY: -2,
    },
    tooltip: {
      backgroundColor: "#000",
      padding: "6 8 8 8",
      borderColor: "#000",
      borderWidth: 0,
      borderRadius: 4,
      lineHeight: 17,
      fontFamily: "Inter",
      text: "%v$ <br>%kl",
      fontColor: "#ffffff",
      shadow: false,
    },
    animation: {
      effect: "4",
      speed: "1000",
      method: "4",
    },
  },
  crosshairX: {
    lineColor: "black",
    lineStyle: "dashed",
    lineWidth: 1,
    scaleLabel: false,
    plotLabel: {
      visible: false,
    },
    lineSegmentSize: 9,
    exact: true,
  },
};

zingchart.render({
  id: "linesChart",
  data: linesConfig,
  height: "230",
  width: "100%",
});

zingchart.shape_click = function (p) {
  if (p.shapeid == "animation1") {
    zingchart.exec("linesChart", "reload");
  }
};

//Revenue Chart


//Heatmap
let chartConfig = {
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
  graphset: [{
    type: 'piano',
    theme: 'classic',
    backgroundColor: '#fff',
    height: "50%",
    legend: {
      visible: false,
      align: 'center',
      borderWidth: '0px',
      item: {
        borderColor: 'none',
        fontColor: '#000000',
        size: '13px'
      },
      layout: 'x6',
      shadow: false,
      toggleAction: 'none',
      verticalAlign: 'bottom',
      width: '100%',
      height: '45%'
    },
    plot: {
      tooltip: {
        text: '%v%',
        fontColor: 'white',
        fontSize: '11px',
        textAlign: 'center',
        padding: "5px 6px 6px 5px",
        borderRadius: '5px',
        shadow: false
      },
      aspect: "brightness",
      borderColor: '#ffffff',
      borderRadius: '5px',
      borderWidth: '3px',
     
      rules: [{
          backgroundColor: '#FFA800',
          fontColor: '#FFA800',
          rule: '%node-value <= 100'
        },
        {
          backgroundColor: 'rgba(255,168,0,0.6)',
          fontColor: '#05636c',
          rule: '%node-value <= 75'
        },
        {
          backgroundColor: 'rgba(98,76,224,0.4)',
          fontColor: '#05636c',
          rule: '%node-value <= 50'
        },
        {
          backgroundColor: 'rgba(98,76,224,0.2)',
          fontColor: '#05636c',
          rule: '%node-value <= 25'
        },
        {
          backgroundColor: '#b2b2b2',
          fontColor: '#ebebeb',
          rule: '%node-value <= 5'
        }
      ]
    },
    plotarea: {
      margin: '20 0 35 65'
    },
    scaleX: {
      values: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      guide: {
        visible: false
      },
      item: {
        borderColor: 'none',
        fontColor: '#000000',
        size: '13px'
      },
      maxItems: 12,
      lineWidth: '0px',
      tick: {
        visible: false
      },
      zooming: true,
      zoomSnap: true
    },
    scaleY: {
      values: ['Europe', 'USA', 'CIS', 'Mid.East', 'Oceania'],
      guide: {
        visible: false
      },
      item: {
        borderColor: 'none',
        fontColor: '#000',
        size: '13px',
        padding: {
          right: '10%'
        }
      },
      lineWidth: '0px',
      mirrored: true,
      tick: {
        visible: false
      },
      zooming: true
    },
    zoom: {
      alpha: 1,
      backgroundColor: 'transparent',
      borderColor: '#fff',
      borderWidth: '0px',
      preserveZoom: true
    },
    scrollX: {
      bar: {
        alpha: .5,
        backgroundColor: '#fff',
        borderRadius: '0px'
      },
      handle: {
        backgroundColor: '#fff',
        borderRadius: '0px',
        borderTop: 'none',
        borderRight: 'none',
        borderBottom: 'none',
        borderLeft: 'none'
      }
    },
    scrollY: {
      bar: {
        alpha: .5,
        backgroundColor: '#fff',
        borderRadius: '0px'
      },
      handle: {
        backgroundColor: '#fff',
        borderRadius: '0px',
        borderTop: 'none',
        borderRight: 'none',
        borderBottom: 'none',
        borderLeft: 'none'
      }
    },
    series: [{
        values: [10, 5, 80, 70, 60, 50, 40, 40, 40, 60, 70, 15],

      },
      {
        values: [90, 55, 85, 85, 65, 80, 90, 100, 35, 55, 40, 95],

      },
      {
        values: [80, 60, 70, 50, 30, 40, 20, 90, 60, 40, 80, 40],

      },
      {
        values: [90, 60, 30, 50, 70, 80, 30, 40, 50, 40, 80, 50],

      },
      {
        values: [85, 75, 50, 40, 90, 60, 80, 70, 40, 50, 70, 80],
  
      }
    ]
  }]
};
 
// RENDER CHARTS
// -----------------------------
zingchart.render({
  id: 'heatmap',
  data: chartConfig
});

//Heatmap
