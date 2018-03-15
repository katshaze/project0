# Project0 / Project0-AI
Simple online game of Noughts & Crosses, either two player or human vs. computer (easy version).

## Get it running:
* Open in your browser using: https://katshaze.github.io/project0
* That page has a link to the AI (Easy) version, but if you're only interested in the AI version, it's here: https://katshaze.github.io/project0-AI
* (Tested browsers so far include Chrome and Safari)

## Built with:
* JavaScript (& jQuery)
* HTML & CSS

## Game features include:
* Alternating starting player
* Winner of each game displayed on screen (inc. special effects)
* Wins tallied (until a screen refresh)
* Click anywhere reset function each time a game ends
* Link to a version where you play against the computer (the two versions are separate web pages)

## Extra snazzy bits
* Blowfish puffs up for a win.

## Problematic bits
* AI version bugs: human can click in a spot already taken and the computer will take this as its cue to play its turn.
* Winning combinations code too hardcoded; not yet useful for knowing _which_ squares are the winning squares or for scaling into a larger board.
* Updates to style & functionality mean updating both versions since they've been separated, causing extra work

## TODO
* Special effect for a win by X (player two/computer)
* Players to be able to choose their icons
* Link two player and AI version into single webpage
* Maaaaaybe have a crack at creating an AI (hard) version


## Licensing

Dual licensed under the MIT and GPL licenses.

## Thanks to

Joel Turnbull, the WDi26 instruction team (John and Theo), and my classmates. For help with approach and debugging.
