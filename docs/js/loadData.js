function fillData() {
  const currentUser = "Rhod3";
  $.getJSON('data/data.json', (json) => {
    $('#commitStats').text(`
          You have made ${json[currentUser].statsGlobal.nbCommit} commits, adding ${json[currentUser].statsGlobal.nbAdd} lines, deleted ${json[currentUser].statsGlobal.nbDelete}, for a total of ${json[currentUser].statsGlobal.nbTotal}. <br/><br/> That's an average of ${json[currentUser].statsGlobal.nbTotalPerCommit} lines modified per commit.
        `);
  });
}

fillData();