import fs from 'fs';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const funds = [];

for (let i = 0; i < 105; i++) {
  let ID = "Bloeme" + getRandomInt(99999);
  funds.push({
    ownerEmail: ID + "@gmail.com",
    isOwner: true,
    isInvestor: false,
    id: ID,
    portfolio: "placeholder",
    portfolioSummary: {
      id: ID,
      AUM: getRandomInt(1000),
      investors: getRandomInt(100),
      totalReturnValue: getRandomInt(1000),
      totalReturnPercent: getRandomInt(100),
    },
  });
}

const db = {
  funds: funds,
};

const jsonString = JSON.stringify(db);
fs.writeFile("./mockServer/db.json", jsonString, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
