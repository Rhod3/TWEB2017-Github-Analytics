function fillData() {
  const currentUser = "Rhod3";
  $.getJSON('data/data.json', (json) => {

    $.each(json, function (i, item) {
      $('#userSelect').append($('<option>', { 
        value: item.value,
        text : item.text 
      }));
    });

    $('#commitStats').text(`
      You have made ${json[currentUser].statsGlobal.nbCommits} commits, adding ${json[currentUser].statsGlobal.nbAdd} lines, deleted ${json[currentUser].statsGlobal.nbDelete}, for a total of ${json[currentUser].statsGlobal.nbTotal}. \n\n 
      That's an average of ${json[currentUser].statsGlobal.nbTotalPerCommit} lines modified per commit.
    `);

    $('#messageStats').text(`
      You have made ${json[currentUser].statsGlobal.nbCommits} commits, containing a total of ${json[currentUser].statsGlobal.nbWordsMessage} words of commit message. \n\n
      That's an average of ${json[currentUser].statsGlobal.nbWordsMessagePerCommit} words of message per commit.
    `);
  });
}

fillData();
