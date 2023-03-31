d3.csv("https://raw.githubusercontent.com/abdurafeyf/time-series-analysis/main/data/predicted.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'BTC High',
  x: unpack(rows, 'ds'),
  y: unpack(rows, 'trend_upper'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'BTC Low',
  x: unpack(rows, 'ds'),
  y: unpack(rows, 'trend_lower'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Time Series with Rangeslider',
  xaxis: {
    autorange: true,
    range: ['2018-04-02', '2024-03-29'],
    rangeselector: {buttons: [
        {
          count: 1,
          label: '1m',
          step: 'month',
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


d3.csv("https://raw.githubusercontent.com/abdurafeyf/time-series-analysis/main/data/actual.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'BTC High',
  x: unpack(rows, 'ds'),
  y: unpack(rows, 'y'),
  line: {color: '#17BECF'}
}

var data = [trace1];

var layout = {
  title: 'Time Series with Rangeslider',
  xaxis: {
    autorange: true,
    range: ['2018-04-02', '2024-03-29'],
    rangeselector: {buttons: [
        {
          count: 1,
          label: '1m',
          step: 'month',
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

Plotly.newPlot('range-slider-2', data, layout);
})
