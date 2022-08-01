//

const data = {
  chart: {
    type: "bar",
    height: 800,
    zoomType: "y",
  },

  title: {
    style: {
      display: "none",
    },
    text: null,
  },
  xAxis: {
    categories: [
      "Austria",
      "Estonia",
      "Sweden",
      "Italy",
      "Czechia",
      "Latvia",
      "Finland",
      "Slovenia",
      "Slovakia",
      "Denmark",
      "Latvia",
      "Finland",
      "Slovenia",
      "Slovakia",
      "Denmark",
    ],

    title: {
      style: {
        display: "none",
      },
      text: null,
    },

    accessibility: {
      description: "Countries",
    },
  },

  credits: {
    enabled: false,
  },

  yAxis: {
    min: 0,
    max: 30,

    tickInterval: 0,
    title: {
      style: {
        display: "none",
      },
      text: null,
    },

    labels: {
      style: {
        display: "none",
      },
      overflow: "justify",
      format: "{value}%",
    },
  },
  plotOptions: {
    series: {
      pointPadding: -0.1,
      borderRadius: 3,
    },
    bar: {
      dataLabels: {
        enabled: false,
        format: "{y}%",
      },
    },
  },
  tooltip: {
    valueSuffix: "%",
    stickOnContact: false,
    backgroundColor: "rgba(255, 255, 255, 0.93)",
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Organic farming area",
      color: "rgba(240, 87, 40, 0.35)",
      borderColor: "rgba(240, 87, 40, 0.35)",
      data: [
        24.1, 20.6, 20.3, 15.2, 14.8, 14.5, 13.1, 10.0, 9.9, 9.8, 14.5, 13.1,
        10.0, 9.9, 9.8,
      ],
    },
  ],
};

export default data;
