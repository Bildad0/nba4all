import React, { useEffect, useState } from "react";

const Card = () => {
    const url = 'https://basketball-data.p.rapidapi.com/tournament/list';
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "565e0bc81dmsh1aab0a6324d1375p16e721jsn4096a1804545",
      "X-RapidAPI-Host": "basketball-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    try {
      async () => {
        await fetch(url, options).then((response) => {
            const data = response.json();
          console.log(data);
        });
      };
      //console.log(tournaments);
    } catch (error) {
      console.error(error);
    }
  });

  const [tournaments, setTournament] = useState([]);

  return (
    <div className="flex flex-row ">
      {tournaments.map(function (tournament, index) {
        return (
          <div className="card w-96 glass" key={tournament[index]}>
            <figure>
              <img src="" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
            ``
          </div>
        );
      })}
    </div>
  );
};

export default Card;
