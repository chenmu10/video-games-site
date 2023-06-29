# Video Games Site
Demo: [rawg-clone-tau.vercel.app/](https://rawg-clone-tau.vercel.app/)

Based on [Rawg.io](https://rawg.io/) 
![image](https://github.com/chenmu10/rawg-clone/assets/13830519/a5d4dad8-c6d2-4e8e-9c51-49094b41e53e)

## Features
- Fetch video games from [RAWG Video Games Database API](https://rawg.io/apidocs)
- Responsive grid
- Infinite scroll
- Filter by genre & platform
- Order by date, rating, name, etc.
- Search by name
- Dark mode switch
  
## Tech Stack
- React 18
- React Query
- React Router
- Typescript
- Vite
- Chakra UI
- Axios
- [Zustand](https://github.com/pmndrs/zustand) - State Management
- Vercel - Deployment

## Run Locally
In project directory:
- create .env file and add your API key:
```
VITE_RAWG_API_KEY=''
VITE_RAWG_BASE_URL='https://api.rawg.io/api'
```
- Run
```
npm install
npm run dev
```


