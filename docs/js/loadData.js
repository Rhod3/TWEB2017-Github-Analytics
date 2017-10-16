function fillSelectWithUser() {
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
  });
}

function fillData() {
  const currentUser = "Rhod3";
  $.getJSON('data/data.json', (json) => {

    // Generate text
    $('#commitStats').html(`
      You have made ${json[currentUser].statsGlobal.nbCommits} commits, adding ${json[currentUser].statsGlobal.nbAdd} lines, deleted ${json[currentUser].statsGlobal.nbDelete}, for a total of ${json[currentUser].statsGlobal.nbTotal}. <br><br> 
      That's an average of ${json[currentUser].statsGlobal.nbTotalPerCommit} lines modified per commit.
    `);

    $('#messageStats').html(`
      You have made ${json[currentUser].statsGlobal.nbCommits} commits, containing a total of ${json[currentUser].statsGlobal.nbWordsMessage} words of commit message. <br><br>
      That's an average of ${json[currentUser].statsGlobal.nbWordsMessagePerCommit} words of message per commit.
    `);
  

    // Generated graph with chart.js

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
        data: userStatsData,
        options: {}
    });

    // Date for the message chart
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
        data: userMessageData,
        options: {}
    });
  });
}

fillData();
fillSelectWithUser();