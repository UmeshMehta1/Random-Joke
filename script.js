let btnRandom = document.querySelector('button');

const getRandom = () => {
  let jokes = [
    `😂Why can’t you send a duck to space?
Because the bill would be astronomic,al!`,

    `😂What does Jeff Bezos do before he goes to sleep?
He puts his PJ-Amazon!`,

    `What happened when the world's tongue-twister champion got arrested?
They gave him a tough sentence!😂`,

    `😂What did the mama cow say to the calf?
It’s pasture bedtime!😂`,

    `😂How does a vampire start a letter?
Tomb it may concern!😂`,

    `😂What did one plate say to the other?
Dinner is on me!😂`,

    `😂Why do hummingbirds hum?
Because they don’t know t,he words!😂`,

    `😂What do sprinters eat before a race?
Nothing. They fast!😂`,

    `😂Animal Jokes for Kids
best jokes for kids😂`,

    `What do you call an elephant that doesn’t matter?
An irrelephant!`,

    `What do you get when you cross a rabbit with shellfish?
An oyster bunny!`,

    `😂Where do polar bears keep their money?
In a snow bank!😂`,

    `Why did the pony get sent to his room?
He wouldn’t stop horsing around!`,

    `Where do cows go on Friday nights?
They go to the moo-vies!`,

    `Why couldn't the pony sing “Happy Birthday?”
Because she was just a little hoarse!`,

    `How do you make an octopus laugh?
With ten-tickles!`,

    `How do you keep a bull from charging?
Take away its credit card!`,

    `Why can’t a leopard hide?
Because he’s always spotte`,

    `What do frogs order at fast-food restaurants?
French flies!`,

    `What do you get from a pampered cow?
Spoiled milk!`,

    `What do you call an alligator who solves mysteries?
An investigator!`,

    `Why is a snake difficult to fool?
You can’t pull its leg!`,

    `What kind of socks do grizzlies wear?
None, they have bear feet!`,

    `What did the dog say when it sat on sandpaper?
"Ruff!"`,

    `What's a cat's favorite dessert?
Chocolate mouse!`,

    `What fish only swims at night?
Starfish!`,

    `What does a triceratops sit on?
Its tricera-bottom!`,

    `Knock Knock Jokes for Kids
jokes for kids`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `😂Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `Knock, knock.
Who’s there?`,

    `What did the bunny say to the carrot?
It’s been nice gnawing you!`,

    `What do you call a sad strawberry?
A blueberry!`,

    `Why did the tomato blush?
Because it saw the salad d,ressing!`,

    `What did the pizza say to the topping?
I never sau-sage a pretty face!`,

    `What do you call a cheese that’s not yours?
Nacho cheese!`,

    `Why did the cookie go to the nurse?
Because he felt crummy!`,

    `What kind of room doesn’t have doors?
A mushroom!`,

    `What kind of key opens a banana?
A mon-key!`,

    `What happens when a grape gets run over crossing the street?
A traffic jam!`,

    `What does garlic do when it gets hot?
It takes its cloves off!`,

    `Where does fruit go on vacation?
Pear-is!`,

    `Why did the melons choose not to get married?
Because they cantaloupe!`,

    `What does a lemon say when it answers the phone?
Yellow!`,

    `What did one dried fruit say when another asked it to the movies?
It's a date!`,

    `What does a cow call an earthquake?
A milkshake!`,

    `Why did the man go to the yogurt museum?
To get a little culture!`,

    `Why couldn't the sesame seed climb up the hill?
Because it was on a roll!`,

    `Why can't you trust tacos?
Because they always spill t,he beans!`,

    `Math Jokes for Kids
best jokes for kids`,

    `Why did two 4s skip dinner?
Because they already 8!`,

    `Did you hear about the mathematician who’s afraid of negative numbers?
He’ll stop at nothing to avoid them!`,

    `What did the triangle feel sorry for the circle?
Because it’s pointless!`,

    `Why was the math book sad?
It had too many problems!`,

    `Why should you never trust someone writing on graph paper?
Because they must be plotting something!`,

    `What do you call two guys who love math?
Algebros!`,

    `What do you get when you divide a Jack o' lantern by its diameter?
Pumpkin pi!`,

    `50 best jokes for kids
Why was 6 afraid of 7?`,

    `What did the 90° angle say after an argument?
"It turns out, I was right!"`,

    `What tool do mathematicians use most?
Multi-pliers!`,

    `Why did the student get upset when their teacher called them average?
It was a mean thing to say!`,

    `What did the 0 say to the 8?
Nice belt!`,

    `Why should you never start a conversation with pi?
It'll just go on forever!`,

    `What is a bird’s favorite type of math?
OWL-gebra!`,

    `Why do teenagers travel in groups of threes and fives?
Because they can’t even!`,

    `Did you hear about the the circle that kept going to school?
It has 360°!`,

    `RELATED: Pi Day Jokes and Puns to Help You Celebrate on March 14
`,

    `Why does it take pirates a long time to learn the alphabet?
Because they can spend years at C!`,

    `What did one snowman say to the other snowman?
It smells like carrots over here!`,

    `What did one wall say to the other wall?
I’ll meet you at the corner!`,

    `Why did the kid throw his clock out the window?
Because he wanted to see time fly!`,

    `Why wouldn’t the shrimp share his treasure?
Because he was a little shellfish!`,

    `Why is Cinderella bad at soccer?
Because she’s always running away, from the ball!`,

    `What does a rain cloud wear under its clothes?
Thunderwear!`,

    `Why do vampires seem sick all the time?
Because they’re always coffin!`,

    `How do you get an astronaut’s baby to stop crying?
You rocket!`,

    `Why are ghosts bad liars?
Because you can see right ,through them!`,

    `Why are spiders so smart?
They can find everything o,n the web!`,

    `What are mummies' favorite lunches?
Wraps!`,

    `How does Darth Vader like his toast?
On the dark side!`,

    `Why are mountains so funny?
They're just hill areas!`,

    `What is the Easter bunny’s favorite type of music?
Hip-hop!`,

    `Why did Beethoven get rid of his chickens?
All they ever said was, “Bach, Bach, Bach!”`,

    `Why did the man name his dogs Rolex and Timex?
Because they were watchdogs!`,

    `Why is grass so dangerous?
Because it’s full of blades,!`,
  ];

  let result = document.querySelector('h1');
  result.innerHTML = jokes[Math.floor(Math.random() * jokes.length)];
};
