function fillData() {
  $.getJSON('data/data.json', (jsonData) => {
    $('#commitStats').text(`
          You have made YY commits, adding XX lines, deleted XX, for a total of XXX. That's an average of XX lines modified per commit.
        `);
  });
}

fillData();