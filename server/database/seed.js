var data = {
  tables: {
    users: [
      {
        id: 1343432,
        first_name: 'John',
        last_name: 'Roberts',
        email: 'john@gmail.com',
      },
      {
        id: 2432412,
        first_name: 'Peter',
        last_name: 'Carpenter',
        email: 'john@gmail.com',
      },
    ],
    location_types: [
      { location: 'Casino' },
      { location: 'Home Game' },
      { location: 'Online' },
      { location: 'Club' },
    ],
    user_location_types: [
      { user_id: 1343432, location_type_id: 1 },
      { user_id: 1343432, location_type_id: 2 },
      { user_id: 1343432, location_type_id: 3 },
      { user_id: 2432412, location_type_id: 2 },
      { user_id: 2432412, location_type_id: 4 },
    ],
    limit_types: [
      { limit_type: 'no limit' },
      { limit_type: 'limit' },
      { limit_type: 'pot limit' },
      { limit_type: 'other' },
    ],
    user_limit_types: [
      { user_id: 1343432, limit_type_id: 1 },
      { user_id: 1343432, limit_type_id: 2 },
      { user_id: 2432412, limit_type_id: 3 },
      { user_id: 2432412, limit_type_id: 4 },
    ],
    stakes: [
      { stake: '1/3' },
      { stake: '2/5' },
      { stake: '5/10' },
      { stake: '10/25' },
    ],
    user_stakes: [
      { user_id: 1343432, stake_id: 1 },
      { user_id: 1343432, stake_id: 2 },
      { user_id: 2432412, stake_id: 3 },
      { user_id: 2432412, stake_id: 4 },
    ],
    locations: [
      { location: 'Graton' },
      { location: 'M8trix' },
      { location: 'Bay 101' },
      { location: 'Friend House' },
    ],
    user_locations: [
      { user_id: 1343432, location_id: 1 },
      { user_id: 1343432, location_id: 2 },
      { user_id: 2432412, location_id: 1 },
      { user_id: 2432412, location_id: 3 },
    ],
    tournament_types: [
      { tournament_type: 'Sit & Go' },
      { tournament_type: 'Single Table' },
      { tournament_type: 'Multi Table' },
      { tournament_type: 'Satellite' },
    ],
    user_tournament_types: [
      { user_id: 1343432, tournament_type_id: 1 },
      { user_id: 1343432, tournament_type_id: 2 },
      { user_id: 2432412, tournament_type_id: 1 },
      { user_id: 2432412, tournament_type_id: 2 },
    ],
    games: [
      { game: 'Texas Holdem' },
      { game: 'Omaha' },
      { game: 'Omaha 8' },
      { game: 'Razz' },
    ],
    user_games: [
      { user_id: 1343432, game_id: 1 },
      { user_id: 1343432, game_id: 2 },
      { user_id: 2432412, game_id: 1 },
      { user_id: 2432412, game_id: 2 },
    ],
    cash_sessions: [
      {
        game: 'Texas Holdem',
        stake: '1/3',
        limit_type: 'no limit',
        location: 'Graton',
        location_type: 'Casino',
        start_time: '2020-04-10 10:10:10',
        end_time: '2020-04-10 10:40:10',
        buy_in: 500,
        cashed_out: 1000,
        tips: 5,
        notes: 'Player 5 was bad',
        user_id: 1343432,
      },
    ],
    tournament_sessions: [
      {
        game: 'Texas Holdem',
        type: 'Sit & Go',
        limit_type: 'no limit',
        location: 'Graton',
        location_type: 'Casino',
        player_total: 500,
        start_time: '2020-04-11 10:10:10',
        end_time: '2020-04-11 11:40:10',
        entry_fee: 500,
        cashed_out: 1000,
        places_paid: 8,
        tips: 5,
        notes: 'Player 6 was bad',
        user_id: 2432412,
      },
    ],
  },
};

var db = require('./');
db.connect(function () {
  db.fixtures(data, function (err) {
    if (err) return console.log(err);
    console.log('Data has been loaded...');
  });
});
