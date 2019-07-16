// Chart Options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333"
  },
  series: [
    {
      name: "Population",
      data: [
        8175133,
        3792621,
        2695598,
        2099451,
        1526006,
        1445632,
        1327407,
        1307402,
        1197816,
        945942
      ]
    }
  ],
  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      'San Jose'
    ]
  },
  plotOptions: {
      bar: {
          horizontal: false
      }
  },
  fill: {
      colors: ['#f44336']
  },
  dataLabels: {
      enabled: false
  },
  title: {
      text: 'Largest US Cities by Population',
      align: 'center',
      margin: 20,
      offsetY: 20,
      style: {
          fontSize: '25px'
      }
  }
};

// Init Chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render Chart
chart.render();

// Event Method Example
document.querySelector('button').addEventListener('click', ()=> 
chart.updateOptions({
    plotOptions: {
        bar: {
            horizontal: true
        }
    }
})
)