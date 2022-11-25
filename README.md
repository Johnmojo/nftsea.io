# nftsea.io

A monorepo site built with React + Express

- **Framwork**: [React](https://reactjs.org/) & [Vite](https://vitejs.dev/)
- **Deployment**: []()
- **3D**: [react-three-fiber](https://github.com/pmndrs/react-three-fiber)
- **Styling**: [TailWindCSS](https://tailwindcss.com/)
- **Backend**: [Express.js](https://expressjs.com/)

# Overview

**Client**

- `public/*` - Static assets of favicon and 3D object.
- `src/assets/*` - Assets like global styles & images.
- `src/components/*` - Reusable components like buttons.
- `src/features*` - Collection of reusable componentized code.
- `hooks/*` - Directory for storing custom hooks.
- `layouts/*` - All other static pages.
- `pages/*` - General pages.

**Server**

- `data/` - Data of JSONs.
- `src/*` - Link to each seperate controllers & routes.

# Outline

![Outline](https://github.com/Johnmojo/nftsea.io/blob/main/.github/images/outline.png)

# 🚀 Quick start

Clone repository

```sh
git clone https://github.com/Johnmojo/nftsea.io.git
```

CD into the repo first

```sh
cd nftsea.io
```

Create a .env file in the root of the monorepo

```env
NFTSEA_SERVER_PORT=4000
NFTSEA_CLIENT_PORT=3000
NFTSEA_CLIENT_URL=http://localhost
```

Install and start

```sh
npm install
npm run start
```

# Endpoints

- http://localhost:4000/articles
- http://localhost:4000/collections
- http://localhost:4000/rankings
