# Prongo starter

A database, an API and a web page, deployed as one with [Prongo](https://prongo.dev).

```
database (Postgres) → api (Node) → web (Node)
```

## Try it

1. **Use this template** on GitHub (or clone it), and change `project:` in `prongo.yaml` to a unique name.
2. Install the CLI and log in:
   ```sh
   curl -fsSL https://get.prongo.dev/cli | sh
   prongo login
   ```
3. Push:
   ```sh
   prongo push
   ```

Prongo deploys the database first, then the API, then the web page, and gives the web page a public URL.
The database and API stay private.

## Run it locally

```sh
cd apps/api && npm install && npm start    # :8080, counts in memory
cd apps/web && API_URL=http://localhost:8080 npm start   # :3000
```

## Next steps

Rename the services, add your own, and read the [`prongo.yaml` docs](https://prongo.dev/docs/config).
