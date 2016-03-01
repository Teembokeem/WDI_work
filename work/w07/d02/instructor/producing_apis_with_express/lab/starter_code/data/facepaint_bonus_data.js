var facepaints = [
  {
    id:           0,
    title:        "Dark Carnival Black",
    safe4Skin:    true,
    price:        2.99,
    endorsements: [
                    {
                      stage_name: "Shaggy 2 Dope",
                      comment:    "I'll be wearing this to the Carnival. Woot Woot."
                    },
                    {
                      stage_name: "Violent J",
                      comment:    "I'm just an evil clown, guys."
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
                      comment:    "It doesn't taste so bad."
                    },
                    {
                      stage_name: "Violent J",
                      comment:    "No really, just an evil clown."
                    },
                    {
                      stage_name: "King Diamond",
                      comment:    "YAAAAAAAAA!!!!!!!!! Soooo WHIIIIIIIIIITTTE!"
                    }
                  ]
  }
];

facepaints.id = 2;

module.exports = facepaints;
