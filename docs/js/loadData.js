function initSelect() {
  $.getJSON('data/data.json', (json) => {
    const users = Object.keys(json);
    console.log(users);

    for (var i in users) {
      console.log(users[i]);
      $('#userSelect').append($('<option>', { 
        value: users[i],
        text : users[i] 
      }));
    }

    $('#userSelect').on('change', function() {
      fillData(this.value);
    });
  });
}

// Keep reference to chart
var statsChart;
var messageChart;

function fillData(currentUser) {
  // const currentUser = "Rhod3";
  $.getJSON('data/data.json', (json) => {

    // Generate texts
    $('#messageStatsTitle').html(`
    How long are ${currentUser} commit message ?
    `);

    $('#messageStats').html(`
      ${currentUser} has made ${json[currentUser].statsGlobal.nbCommits} commits, containing a total of ${json[currentUser].statsGlobal.nbWordsMessage} words of commit message. <br><br>
      That's an average of <span style="color:blue;">${json[currentUser].statsGlobal.nbWordsMessagePerCommit}</span> words of message per commit.
    `);

    // Generate graph with chart.js

    // Data for the message chart
    var ctx = document.getElementById('commitMessageChart').getContext('2d');
    let userMessageData = {
      labels: [],
      datasets: [{
        label: "Number of words per commit",
        data: [],
      }]
    };
    for (var key in json[currentUser].stats) {
      userMessageData.labels.push(key);
      userMessageData.datasets[0].data.push(json[currentUser].stats[key].nbWordsMessagePerCommit);
    }
    // Creation of the chart
    if (messageChart) {
      messageChart.destroy();
    }
    messageChart = new Chart(ctx, {
        type: 'bar',
        backgroundColor : 'blue',
        data: userMessageData,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
    });

    var myConfig = {
      "graphset":[
      {
      "type":"wordcloud",
      "options": {
        "style": {
          "tooltip": {
            visible: true,
            text: '%text: %hits'
          }
        },
      "words": json[currentUser].statsGlobal.messages
      }
      }
    ]
    };
     
    zingchart.render({ 
      id: 'cloudWordChart', 
      data: myConfig, 
      height: '100%', 
      width: '100%' 
    });

  });
}

initSelect();