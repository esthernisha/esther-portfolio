# Interactive Professional Portfolio

A responsive React + Vite portfolio with a bright, colorful, professional design.

## Features
- Introduction and background
- Education and previous experience sections
- Skills cards
- Clickable project cards for MedBook, Partner, Excel, Power BI, and Python
- Contact links
- Resume view/download button
- Responsive mobile navigation
- Custom CSS artwork for project cards

## Run locally
1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP and open the folder in VS Code.
3. In the terminal run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the localhost URL shown in the terminal.

## Personalize before publishing
Edit `src/App.jsx`:
- Replace `YOUR NAME` and `YN`.
- Update the `profile` object with your own professional introduction, email, LinkedIn, and GitHub.
- Update the `education` array with real qualifications.
- Update the `experience` array with real company, title, dates, responsibilities, and achievements.
- Update the `skills` array so it lists only skills you can confidently discuss.
- Update the `projects` array. MedBook and Partner currently use Play Store search links because exact app URLs were not supplied. Replace them with the exact official app listings.
- Replace the example GitHub and Google Colab URLs with the real project destinations.

## Add your CV
Copy your PDF resume to `public/resume.pdf`. The Resume links are already configured to open `/resume.pdf` in a new tab; the browser can then download it.

## Build and deploy
Test:
```bash
npm run build
npm run preview
```
For free hosting, push the project to GitHub and import the repository in https://vercel.com/.
Use build command `npm run build` and output directory `dist`.

## Before sharing with recruiters
Make sure every link points to the intended destination, remove template details, verify your CV, and replace descriptions with truthful summaries of your work. The project artwork is illustrative; it is not a screenshot of the actual apps or dashboards.
