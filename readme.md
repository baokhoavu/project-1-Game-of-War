WDI Project 1: Build a Game - War

### Technical Requirements
Your app must:

- **Render a game in the browser**
- **Code win and/or loss logic and render in HTML.**
- **Include separate HTML / CSS / JavaScript files**
- Use **Use native Javascript** for **DOM manipulation**
- **Deploy your game online**, using GitHub Pages, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)

### Game Elements

- 2 Players (Captain Morgan, Jack Daniels)
- 52 Deck of Cards (Split into Two[26/player])
- Values are from 2-11
- Value > Value returns to Array

### MVP - Gameplay

- Rounds are 1 card drawn for each
- Each Card has a value and is compared
- Player with higher value receives both cards into their deck
- If both values are equal, War round is initiated
- 3 more cards are drawn from each and last one is compared
- Winner receives both sets of cards used

### Win Condition
- if player has reached 52 Cards, they have won
- if player has 0 cards left, they have lost

### Icebox
- War on War repeated
- Sound Effects
- Animated
- Image displayed for values
