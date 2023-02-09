const uri = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vQPy2xDn8ltDnCRMzxqZ/scores/';

const AddPlayer = async (data = {}) => {
  const response = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
};

const GetPlayers = async () => {
  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
};

export { AddPlayer, GetPlayers };