
### Files

- **index.html**: The main HTML file that contains the structure of the digital clock.
- **CSS/style.css**: The stylesheet for styling the clock and the page.
- **JS/script.js**: The JavaScript file that handles the clock functionality.
- **CSS/double_force_7.ttf**: A custom font used for the clock display.

## Features

- Displays the current time in `HH:MM:SS AM/PM` format.
- Automatically updates every second.
- Styled with custom fonts and glowing effects for a modern look.

## How to Run

1. Clone or download the project to your local machine.
2. Open the `index.html` file in any modern web browser.
3. The digital clock will display and update in real-time.

## Code Explanation

### JavaScript (`JS/script.js`)

The clock functionality is implemented in the `runClock` function, which:
1. Fetches the current time using the `Date` object.
2. Converts the time to a 12-hour format with AM/PM indicators.
3. Formats hours, minutes, and seconds to always display two digits.
4. Updates the `.clock` element in the DOM with the current time.
5. Runs every second using `setInterval`.

### CSS (`CSS/style.css`)

- The clock is styled with a custom font (`double_force_7`) and glowing effects.
- The layout is responsive and centered on the page.
- The background and text colors are chosen for a modern and visually appealing design.

## Preview

![Digital Clock Preview](https://via.placeholder.com/600x300?text=Digital+Clock+Preview)

## License

This project is open-source and available under the MIT License.