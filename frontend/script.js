d3.csv("https://raw.githubusercontent.com/abdurafeyf/time-series-analysis/main/prophet_predicted.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'NASDAQ Actual',
  x: unpack(rows, 'ds'),
  y: unpack(rows, 'actual'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'NASDAQ Forecasted',
  x: unpack(rows, 'ds'),
  y: unpack(rows, 'trend'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Time Series Forecasting for NASDAQ',
  xaxis: {
    autorange: true,
    range: ['2018-04-02', '2024-03-29'],
    rangeselector: {buttons: [
        {
          count: 1.5,
          label: '1.5y',
          step: 'year',
          stepmode: 'backward'
        },
        {
          count: 6,
          label: '6m',
          step: 'month',
          stepmode: 'backward'
        },
        {step: 'all'}
      ]},
    rangeslider: {range: ['2018-04-02', '2024-03-29']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [86.8700008333, 138.870004167],
    type: 'linear'
  }
};

Plotly.newPlot('range-slider', data, layout);
})

