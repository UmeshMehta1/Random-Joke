const getRandom = () => {
  let users = [
    'hello',
    'umesh',
    'kumar',
    'mehta',
    'rahul',
    'kamleshwar',
    'rajesh',
    'lsas',
  ];

  var result = document.querySelector('h1');
  result.innerHTML = users[Math.floor(Math.random() * users.length)];
};
