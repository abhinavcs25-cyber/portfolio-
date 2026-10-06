# Abhi's Portfolio

A responsive portfolio built with Next.js, React, and plain CSS. The content is based on the resume supplied for this project. The page is kept in one small React file so it is easy to show and explain in class.

## Open and run it in VS Code

1. Extract the ZIP file to a folder on your computer.
2. In VS Code, choose **File > Open Folder** and select the extracted `portfolio` folder.
3. Open the integrated terminal (**Terminal > New Terminal**) and run:

```bash
npm install
npm run dev
```

4. Open the local address printed in the terminal, usually `http://localhost:3000`.
5. Press `Ctrl+C` in the terminal to stop the development server.

Node.js must be installed before running the project.

## Code tour

- `app/page.jsx` contains the page sections, portfolio details, and project cards.
- `app/globals.css` contains the colors, typography, layout, and mobile styling.
- `app/layout.jsx` sets the browser title and page description.
- `public/profile.jpeg` is the portrait used in the hero section.
- `package.json` lists the commands and packages required to run the site.

## Portfolio content

The project descriptions and education details come from the supplied resume. GeoShield AI is described as a proposed concept, and the Arduino vehicle is described as a hands-on project. Contact details were left out because the resume did not contain an email address or phone number.

## Publish to GitHub

Create an empty repository on GitHub, then open a terminal in this folder and replace the URL below with your repository URL:

```bash
git init
git add .
git commit -m "Build Abhi's portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
