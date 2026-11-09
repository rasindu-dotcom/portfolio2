# Yasanga P. Creative Solutions — Portfolio Website

A responsive, multi-page portfolio website with a black-and-yellow visual identity built with HTML, CSS and vanilla JavaScript. It is designed for GitHub Pages and includes a Pages CMS configuration for visual portfolio editing.

## Included
- `index.html` — homepage
- `work.html` — portfolio gallery with category filters
- `project.html` — individual project detail view
- `services.html`, `about.html`, `contact.html`
- `projects.json` — editable project data
- `assets/images/` — supplied portraits and portfolio images
- `.pages.yml` — Pages CMS configuration
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

## Upload to your existing GitHub repository
1. Download and extract this ZIP.
2. Open your existing `portfolio` repository on GitHub.
3. Upload the **contents** of this folder to the repository root (not the outer folder itself).
4. Keep the repository's existing `.git` history. Do not upload a second nested `portfolio` folder.
5. If GitHub asks whether to replace files, replace the website files with these updated versions. Keep any unrelated repository files you still need.
6. In GitHub, open **Settings → Pages**. Under Build and deployment, choose **GitHub Actions**.
7. The workflow deploys on every push to the `main` branch. If your default branch is not `main`, change `main` in `.github/workflows/pages.yml` to your branch name.

## Visual portfolio management with Pages CMS
1. Visit https://pagescms.org/ and sign in with GitHub.
2. Authorize access to your `portfolio` repository.
3. Open the repository in Pages CMS. The `.pages.yml` file defines the Portfolio Projects editor.
4. Edit the project list in the Portfolio Projects section. Upload new images into `assets/images/` and select the uploaded image in the project entry (the CMS stores its public `/assets/images/...` path).
5. Save changes. Pages CMS commits them to GitHub; GitHub Pages then republishes the site.

### Adding a project
In Pages CMS, add a new item with:
- A unique lowercase URL slug, e.g. `new-company-brochure`
- Project title
- One of the available categories
- Project type and short description
- Project image, selected from the image picker
- Set **Show on homepage** to true if it should appear in the featured section.

Image files should be JPG, PNG or WebP. Use descriptive filenames without spaces. For best performance, keep portfolio images reasonably compressed (ideally under 1–2 MB each).

## Contact form note
The contact form validates the required fields and prepares an email to `rasinduy@gmail.com` using the visitor's default email application (`mailto:`). It does not silently send data to a server. To receive submissions without requiring the visitor's email app, connect a form backend such as Formspree and replace the form submit handler in `script.js`.

## Important
- All supplied images are used as provided; no client names or project claims have been invented beyond the content visible in the artwork.
- Adam Lewis and Michael Beraka recommendations are displayed with the wording supplied in the project brief.
- Replace or add projects by updating `projects.json` or using Pages CMS.
