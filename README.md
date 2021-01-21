# Findr

### Setup
1. Setup frontend (`http://localhost:3000/` or `http://localhost:8000/`)
	1. `cd frontend`
	2. `npm install`
	3. `npm run-script build`
2. Setup backend (`http://localhost:8000/`)
	1. Return to the root directory `cd ..`
	2. `cd backend`
	3. `npm install`
3. Setup root
	1. Return to the root directory `cd ..`
	2. `npm install`

### Run
- To run development environment  `npm run dev`
*or*
- To run production environment `npm run start`

### Production
- Environment Variables:
	- `NODE_ENV` - The environment type
			- example: "production" 
	- `PORT` - The port that server.js runs
	- `REACT_APP_MAPBOX_API_KEY` - The MapBox API key
