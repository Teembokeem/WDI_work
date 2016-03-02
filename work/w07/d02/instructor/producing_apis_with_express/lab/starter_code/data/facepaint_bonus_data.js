var facepaints = [
  {
    id:           0,
    title:        "Dark Carnival Black",
    safe4Skin:    true,
    price:        2.99,
    endorsements: [
                    {
                      fp_id:      0,
                      stage_name: "Shaggy 2 Dope",
                      comment:    "I'll be wearing this to the Carnival. Woot Woot.",
                      id:         0
                    },
                    {
                      fp_id:      0,
                      stage_name: "Violent J",
                      comment:    "I'm just an evil clown, guys.",
                      id:         1
                    }
                  ]
  },
  {
    id:           1,
    title:        "Ghost Family White Woot Woot",
    safe4Skin:    false,
    price:        4.99,
    endorsements: [
                    {
                      stage_name: "Gene Simmons",
                      comment:    "It doesn't taste so bad.",
                      fp_id:      1,
                      id:         2
                    },
                    {
                      stage_name: "Violent J",
                      comment:    "No really, just an evil clown.",
                      fp_id:      1,
                      id:         3
                    },
                    {
                      stage_name: "King Diamond",
                      comment:    "YAAAAAAAAA!!!!!!!!! Soooo WHIIIIIIIIIITTTE!",
                      fp_id:      1,
                      id:         4
                    }
                  ]
  }
];

facepaints.id = 2;
facepaints.en_id = 5;

module.exports = facepaints;
