# FastAPI Project - Frontend

The frontend is built with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [TanStack Query](https://tanstack.com/query), [TanStack Router](https://tanstack.com/router) and [Chakra UI](https://chakra-ui.com/).


* Within the `frontend` directory, install the necessary NPM packages:

```bash
npm install
```

* And start the live server with the following `npm` script:

```bash
npm run dev
```

* Then open your browser at http://localhost:5173/.

Notice that this live server is not running inside Docker, it's for local development, and that is the recommended workflow. Once you are happy with your frontend, you can build the frontend Docker image and start it, to test it in a production-like environment. But building the image at every change will not be as productive as running the local development server with live reload.

Check the file `package.json` to see other available options.


---



## Generate Client (API services etc.)

* Download the OpenAPI JSON file and copy it to a new file `openapi.json` at the root of the `frontend` directory or directly use the url in `generate-client` command in package.json.

* To simplify the names in the generated frontend client code, modify the `openapi.json` file by running the following script:

```bash
node modify-openapi-operationids.js
```

* To generate the frontend client, run:

```bash
npm run generate-client
```

* Commit the changes.

Notice that everytime the backend changes (changing the OpenAPI schema), you should follow these steps again to update the frontend client.

## Using a Remote API

If you want to use a remote API, you can set the environment variable `VITE_API_URL` to the URL of the remote API. For example, you can set it in the `frontend/.env` file:

```env
VITE_API_URL=https://my-remote-api.example.com
```

Then, when you run the frontend, it will use that URL as the base URL for the API.

**Note that we will have to set `VITE_API_URL` separately in the dockerfile**

## Code Structure

The frontend code is structured as follows:

* `frontend/src` - The main frontend code.
* `frontend/src/assets` - Static assets.
* `frontend/src/client` - The generated OpenAPI client.
* `frontend/src/components` -  The common components of the frontend.
* `frontend/src/hooks` - Custom hooks.
* `frontend/src/pages` - The different routes of the frontend along with their component hierarchy.
* `theme.tsx` - The Chakra UI custom theme.



## Local docker build instructions (see local server based instructions at top)
```bash
docker build -t my-app-fe .
```
```bash
docker tag my-app-fe vyathartha/my-app-fe:latest
```
```bash
docker push  vyathartha/my-app-fe:latest
```

```bash
docker run -d -p 5173:80 vyathartha/my-app-fe
```
OR
```bash
docker run -d -p 5173:80 my-app-fe
```
