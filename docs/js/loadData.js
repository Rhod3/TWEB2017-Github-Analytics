function fillData() {
  const currentUser = "Rhod3";
  $.getJSON('data/data.json', (json) => {

    console.log(Object.keys(json));

    for (var i in Object.keys(json)) {
      console.log(i);
      $('#userSelect').append($('<option>', { 
        value: i,
        text : i 
      }));
    }

    $('#commitStats').text(`
      You have made ${json[currentUser].statsGlobal.nbCommits} commits, adding ${json[currentUser].statsGlobal.nbAdd} lines, deleted ${json[currentUser].statsGlobal.nbDelete}, for a total of ${json[currentUser].statsGlobal.nbTotal}. \n\n 
      That's an average of ${json[currentUser].statsGlobal.nbTotalPerCommit} lines modified per commit.
    `);

    $('#messageStats').text(`
      You have made ${json[currentUser].statsGlobal.nbCommits} commits, containing a total of ${json[currentUser].statsGlobal.nbWordsMessage} words of commit message. \n\n
      That's an average of ${json[currentUser].statsGlobal.nbWordsMessagePerCommit} words of message per commit.
    `);
  });

  // Create graph with chart.js
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
              label: "My First dataset",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45],
          }]
      },
  
      // Configuration options go here
      options: {}
  });
}

fillData();
