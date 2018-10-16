const delay = 500;

    const post = {
    message: 'You can always tell how far you are in life by the type of women who reply your text messages✔😂😂😂',
    bet: 'Draw',
    // user: {
    //   id: 1,
    //   userName: 'sofienGwin',
    //   email: 'sofien@example.com',
    //   comments: []
    // },
    // match: {
    //   id: 1,
    //   homeTeam: 'Man Utd',
    //   awayTeam: 'Man City'
    // }
  };

  export const countries = [
    {name: 'England'},
    {name: 'Germany'},
    {name: 'Spain'},
    {name: 'Italy'},
    {name: 'France'}
  ];

  export function getCountries() {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(countries);
      }, delay);
    });
  }

  const leagues = {
    england: createLeague('England'),
    spain: createLeague('Spain'),
    italy: createLeague('Italy'),
    germany: createLeague('Germany'),
    france: createLeague('France')
  };

  function createLeague(country) {
    return [
      { name: country + 'League 1'},
      { name: country + 'League 2'},
      { name: country + 'League 3'},
      { name: country + 'League 4'}
    ];
  }

  export function getLeagues(country) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(leagues[country]);
      }, delay);
    });
  }


  export function getMatches() {
    const matches = [];
    for(let i = 0; i <= 10; i++) {
      matches.push({ name: "Team " + i + ' vs ' + 'Team' + i + 1});
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(matches);
      }, delay);
    });
  }


  const posts = [];
  function gettips() {
    for(let i = 0; i <= 20; i++) {
      post['id'] = String(i);
      posts.push(post);
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, delay)
    })
  }

export const tips = gettips();

export function getBets() {
  let bets = [];
  for(let i = 1; i <= 5; i++) {
    bets.push({name: 'Bet ' + i});
  }

  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(bets);
    }, delay);
  });
}