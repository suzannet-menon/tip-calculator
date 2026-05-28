# ANSWERS.md

## 1. How to run

### Run locally

1. Clone the repository

```bash
git clone https://github.com/suzannet-menon/tip-calculator.git
```

2. Navigate into the project folder

```bash
cd tip-calculator
```

3. Open `index.html` in any browser.

No additional installations or dependencies are required.

---

## 2. Stack & design choices

I used HTML, CSS, and Vanilla JavaScript because I wanted to focus on understanding the core frontend fundamentals instead of relying on frameworks for a relatively small interactive project.

One design decision I made was using a two-column responsive layout with an informational section on the left and the calculator on the right. This helped the application feel more like a modern web app instead of only a form card.

Another interaction decision was implementing preset tip buttons alongside a custom tip input. The selected tip button becomes visually active, and entering a custom tip automatically clears the active preset state. This creates a smoother and less confusing user experience.

---

## 3. Responsive & accessibility

On larger laptop screens, the application uses a two-column layout with informational content beside the calculator. On smaller screens such as a 360px-wide mobile device, the layout stacks vertically into a single-column design using CSS media queries.

One accessibility consideration I handled was visible focus states for inputs and dropdowns using border and shadow changes so keyboard users can identify the currently focused field.

One thing I did not fully implement was complete screen-reader optimization with ARIA attributes because I prioritized completing the calculator interaction and validation logic within the available time.

---

## 4. AI usage

I used ChatGPT to:

* understand HTML structure and semantic tags
* revise CSS concepts like Flexbox, Grid, gradients, spacing, and responsive media queries
* implement JavaScript event listeners and live calculations
* debug layout and validation issues
* structure validation logic and reset functionality

Changes I made to AI-generated output was:
- Redesigning the initial single-card layout into a two-column responsive layout with an informational section and calculator section. 
- Modified the strucutre of the HTML code and how the errors were mentioned. 
- Modified the gradients, typography sizes, spacing, and footer structure to better match the UI direction I wanted. 

---

## 5. Honest gap

One area that is not fully polished is advanced accessibility support and edge-case handling for every possible invalid input scenario. With another day, I would improve accessibility further with ARIA labels, improve keyboard navigation, and add more refined input handling and animations for validation states.
