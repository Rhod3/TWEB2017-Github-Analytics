function fillSelectWithUser() {
  $.getJSON('data/data.json', (json) => {
    console.log(Object.keys(json));
    
        for (var i in Object.keys(json)) {
          console.log(i);
          $('#userSelect').append($('<option>', { 
            value: i,
            text : i 
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
    var ctx = document.getElementById('commitStatsChart').getContext('2d');
    // The data for our dataset
    let data = {
      labels: [],
      datasets: [{
        label: "Total number of lines modified per commit per language",
        data: [],
      }]
    };

    for (var key in json[currentUser].stats) {
      data.labels.push(key);
      data.datasets[0].data.push(json[currentUser].stats[key].nbTotalPerCommit);
    }
    // Creation of the chart
    var chart = new Chart(ctx, {
        type: 'bar',
        data: userData,
        options: {}
    });
  });
}

fillData();
fillSelectWithUser();