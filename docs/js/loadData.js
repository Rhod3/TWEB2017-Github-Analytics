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

    $('#wordCloudText').html(`
      And here is a cloud word from all the commit message of ${currentUser}. <br><br>
      You can hover on them to see how many times they appear in your commit message.
    `);

    // Generate graph with chart.js

    // Data for the message chart
    var ctx = document.getElementById('commitMessageChart').getContext('2d');
    let userMessageData = {
      labels: [],
      datasets: [{
        label: 'Number of words per commit',
        data: [],
      }]
    };
    for (var key in json[currentUser].stats) {
      userMessageData.labels.push(key);
      userMessageData.datasets[0].data.push(json[currentUser].stats[key].nbWordsMessagePerCommit);
    }
    // Destroy the previous chart if it exists
    if (messageChart) {
      messageChart.destroy();
    }
    // Create the chart
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

    console.log(json[currentUser].statsGlobal.messages);

    // Creation of the word cloud
    var myConfig = {
      type: 'wordcloud',
      options: {
        text: json[currentUser].statsGlobal.messages,
        minLength: 2,
        ignore: ['Merge', 'branch', '\'master\''],
        maxItems: 50,
        aspect: 'flow-center',
        rotate: true,
        colorType: 'palette',
        palette: ['#D32F2F','#5D4037','#1976D2','#E53935','#6D4C41','#1E88E5','#F44336','#795548','#2196F3','#EF5350','#8D6E63','#42A5F5'],
        
        style: {
          fontFamily: 'Crete Round',
          
          hoverState: {
            backgroundColor: '#D32F2F',
            borderRadius: 2,
            fontColor: 'white'
          },
          tooltip: {
            text: '%text: %hits',
            visible: true,
            
            alpha: 0.9,
            backgroundColor: '#1976D2',
            borderRadius: 2,
            borderColor: 'none',
            fontColor: 'white',
            fontFamily: 'Georgia',
            textAlpha: 1
          }
        }
      },
    };
    
    zingchart.render({ 
      id: 'cloudWordChart', 
      data: myConfig, 
      height: 400, 
      width: '100%' 
    });
  });
}

initSelect();
