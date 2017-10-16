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

function fillData(currentUser) {
  // const currentUser = "Rhod3";
  $.getJSON('data/data.json', (json) => {

    // Generate texts
    $('#commitStatsTitle').html(`
    How much do ${currentUser} commit at a time ?
    `);
    $('#messageStatsTitle').html(`
    How long are ${currentUser} commit message ?
    `);

    $('#commitStats').html(`
      You have made ${json[currentUser].statsGlobal.nbCommits} commits, adding <span style="color:green;">${json[currentUser].statsGlobal.nbAdd}</span> lines, 
        deleted <span style="color:red;">${json[currentUser].statsGlobal.nbDelete}</span>, 
        for a total of <span style="color:blue;">${json[currentUser].statsGlobal.nbTotal}</span>. <br><br> 
      That's an average of ${json[currentUser].statsGlobal.nbTotalPerCommit} lines modified per commit.
    `);
    $('#messageStats').html(`
      You have made ${json[currentUser].statsGlobal.nbCommits} commits, containing a total of ${json[currentUser].statsGlobal.nbWordsMessage} words of commit message. <br><br>
      That's an average of <span style="color:blue;">${json[currentUser].statsGlobal.nbWordsMessagePerCommit}</span> words of message per commit.
    `);
  

    // Generate graph with chart.js

    // Data for the stats
    var ctx = document.getElementById('commitStatsChart').getContext('2d');
    let userStatsData = {
      labels: [],
      datasets: [{
        label: "Number of lines modified per commit",
        data: [],
      }]
    };
    for (var key in json[currentUser].stats) {
      userStatsData.labels.push(key);
      userStatsData.datasets[0].data.push(json[currentUser].stats[key].nbTotalPerCommit);
    }
    // Creation of the chart
    var chart = new Chart(ctx, {
        type: 'bar',
        fillColor : "blue",
        data: userStatsData,
        options: {}
    });

    // Data for the message chart
    var ctx2 = document.getElementById('commitMessageChart').getContext('2d');
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
    var chart = new Chart(ctx2, {
        type: 'bar',
        fillColor : "blue",
        data: userMessageData,
        options: {}
    });
  });
}

initSelect();