export const jobsSummary = {
  data: {
    labels: [
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
    datasets: [
      {
        fill: true,
        // lineTension: 0.1,
        // label: "Complete",
        backgroundColor: "rgba(238, 242, 255, 0.5)",
        borderColor: "#4F46E5",
        // borderCapStyle: "butt",
        borderDash: [],
        // showLine: false,
        borderDashOffset: 0.0,
        // borderJoinStyle: "miter",
        pointBorderColor: "#4F46E5",
        pointBackgroundColor: "#4F46E5",
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#4F46E5",
        pointHoverBorderColor: "#FFFFFF",
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
        cubicInterpolationMode: "monotone" as const,
        tension: 0.4,
        data: [
          0, 1000, 1500, 2000, 4000, 3000, 8000, 5000, 2000, 8000, 10000, 3000,
          12000,
        ],
      },
      {
        fill: true,
        // lineTension: 0.1,
        // label: "Failed",
        backgroundColor: "rgba(238, 242, 255, 0.5)",
        borderColor: "#EF5C5C",
        // borderCapStyle: "butt",
        borderDash: [],
        // showLine: false,
        borderDashOffset: 0.0,
        // borderJoinStyle: "miter",
        pointBorderColor: "#EF5C5C",
        pointBackgroundColor: "#EF5C5C",
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#EF5C5C",
        pointHoverBorderColor: "#FFFFFF",
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
        cubicInterpolationMode: "monotone" as const,
        tension: 0.4,
        data: [
          0, 1500, 1300, 2500, 3000, 4000, 6000, 7000, 9000, 2500, 3500, 8000,
        ],
      },
    ],
  },
  options: {
    spanGaps: true,
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 50,
        bottom: 20,
      },
    },
    scales: {
      y: {
        weight: 3000,
        beginAtZero: true,
        border: {
          display: false,
        },
        ticks: {
          display: false,
          padding: 10,
          color: "#818d8a",
          autoSkip: true,
          font: { weight: "normal", family: "Plus Jakarta Sans" },
          stepSize: 2000,
        },
        grid: {
          drawBorder: false,
          borderDashOffset: 1,
          drawTicks: false,
        },
      },
      x: {
        ticks: {
          padding: 10,
          color: "#818d8a",
          font: { weight: "normal", family: "Plus Jakarta Sans" },
        },
        grid: {
          drawBorder: false,
          borderDashOffset: 1,
          drawTicks: true,
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        align: "start" as const,
        position: "top" as const,
        usePointStyle: true,
        pointStyle: "circle" as const,
      },
      tooltip: {
        yAlign: "bottom" as const,
        backgroundColor: "#FFFFFF",
        titleColor: "#71717A",
        titleFont: { weight: "medium", family: "Plus Jakarta Sans" },
        titleAlign: "center" as const,
        bodyColor: "#18181B",
        borderColor: "#E4E4E7",
        borderWidth: 1,
        bodyAlign: "center" as const,
        bodyFont: { weight: "medium" },
        displayColors: false,
      },
    },
  },
};

// gender statistics configuration
export const jobStat = {
  data: {
    labels: ["Failed", "pending", "Completed"],
    datasets: [
      {
        // fill: false,
        // lineTension: 0.1,
        label: "Gender statistics",
        borderWidth: 0.5,
        borderColor: ["#D97161", "#542BE7", "#00D4FD"],
        backgroundColor: ["#FF9C8D", "#D3CEF8", "#B3EBF7"],
        data: [1500, 3000, 2000],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "60%",
    maintainAspectRatio: true,
    plugins: {
      // beforeInit(chart) {
      //   chart.data.legend.forEach(function (label, index, labelsArr) {
      //     if (/\n/.test(label)) {
      //       // eslint-disable-next-line no-param-reassign
      //       labelsArr[index] = label.split(/\n/)
      //     }
      //   })
      // },
      elements: {
        center: {
          text: "Red is 2/3 the total numbers",
          color: "#FF6384", // Default is #000000
          fontStyle: "Arial", // Default is Arial
          sidePadding: 20, // Default is 20 (as a percentage)
          minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
          lineHeight: 25, // Default is 25 (in px), used for when text wraps
        },
      },
      legend: {
        display: false,
        position: "bottom" as const,
        align: "end" as const,
        // fullSize: true,
        // maxHeight: 100,
        maxwidth: 100,
        labels: {
          boxWidth: 15,
          boxHeight: 15,
        },
      },
      tooltip: {
        backgroundColor: "#FFFFFF",
        titleColor: "#71717A",
        titleFont: { weight: "medium", family: "Plus Jakarta Sans" },
        titleAlign: "center" as const,
        bodyColor: "#18181B",
        borderColor: "#E4E4E7",
        borderWidth: 1,
        bodyAlign: "center" as const,
        bodyFont: { weight: "medium" },
      },
    },
  },
};

export const accountSummary = {
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        backgroundColor: "rgba(155, 160, 245, 1)",
        borderColor: "#333382",
        borderWidth: 1,
        tension: 0.4,
        data: [20, 40, 50, 60, 50, 40],
      },
      {
        backgroundColor: "rgba(155, 160, 245, 1)",
        borderColor: "#333382",
        borderWidth: 1,
        tension: 0.4,
        data: [10, 30, 60, 50, 70, 70],
      },
    ],
  },
  options: {
    responsive: true,
    indexAxis: "y" as const,
    maintainAspectRatio: false,

    scales: {
      y: {
        weight: 3000,
        beginAtZero: true,
        border: {
          display: true,
          width: 1,
        },
        ticks: {
          // display: true,
          padding: 10,
          color: "#818d8a",
          autoSkip: true,
          font: { weight: "normal", family: "Plus Jakarta Sans" },
          stepSize: 2000,
        },
        grid: {
          drawBorder: true,
          borderDashOffset: 1,
          drawTicks: true,
          display: true,
        },
      },
      x: {
        ticks: {
          padding: 10,
          color: "#818d8a",
          font: { weight: "normal", family: "Plus Jakarta Sans" },
        },
        grid: {
          drawBorder: false,
          borderDashOffset: 1,
          drawTicks: true,
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: "bottom" as const,
        backgroundColor: "#FFFFFF",
        titleColor: "#71717A",
        titleFont: { weight: "medium", family: "Plus Jakarta Sans" },
        titleAlign: "center" as const,
        bodyColor: "#18181B",
        borderColor: "#E4E4E7",
        borderWidth: 1,
        bodyAlign: "center" as const,
        bodyFont: { weight: "medium" },
        displayColors: false,
      },
    },
  },
};

export const locationSummary = {
  data: {
    labels: [
      "Lag",
      "Abj",
      "Kan",
      "Oyo",
      "Ogu",
      "Mad",
      "Lok",
      "Jos",
      "Imo",
      "PH",
      "Edo",
      "Iba",
    ],
    datasets: [
      {
        backgroundColor: "rgba(6, 78, 59, 1)",
        tension: 0.4,
        data: [20, 40, 50, 60, 50, 40, 80, 90, 60, 50, 40, 70],
      },
    ],
  },
  options: {
    responsive: true,

    maintainAspectRatio: false,

    scales: {
      y: {
        weight: 3000,
        beginAtZero: true,
        border: {
          display: true,
          width: 1,
        },
        ticks: {
          display: false,
          padding: 10,
          color: "#818d8a",
          autoSkip: true,
          font: { weight: "normal", family: "Plus Jakarta Sans" },
          stepSize: 2000,
        },
        grid: {
          drawBorder: false,
          borderDashOffset: 1,
          drawTicks: false,
          display: false,
        },
      },
      x: {
        ticks: {
          diplay: false,
          padding: 10,
          color: "#818d8a",
          font: { weight: "normal", family: "Plus Jakarta Sans" },
        },
        grid: {
          display: false,
          drawBorder: false,
          borderDashOffset: 1,
          drawTicks: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: "bottom" as const,
        backgroundColor: "#FFFFFF",
        titleColor: "#71717A",
        titleFont: { weight: "medium", family: "Plus Jakarta Sans" },
        titleAlign: "center" as const,
        bodyColor: "#18181B",
        borderColor: "#E4E4E7",
        borderWidth: 1,
        bodyAlign: "center" as const,
        bodyFont: { weight: "medium" },
        displayColors: false,
      },
    },
  },
};
