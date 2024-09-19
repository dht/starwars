# Starwars

Mono-repo for Starwars project

## Install dependencies

```bash
npm install
```

## Run the project

```bash
npm run dev
```

## Solution approach

I've implement a mono-repo with several base packages:

| Package        | Description                       |
| -------------- | --------------------------------- |
| `starwars-api` | API client for the Starwars API   |
| `starwars-ui`  | Shared components for the project |
| `table-system` | A schema-based table system       |
| `form-system`  | A schema-based form system        |

To edit MUI data-grid's items simply double click a cell's content.

> Note: I’ve implemented a getAll method that fetches all data from the API.
> This approach enables the use of MUI’s advanced DataGrid features, such as sorting and filtering. However, this method is not ideal for real-world applications as it has long response latency. In practice, a REST API would handle sorting, filtering, and other CRUD operations server-side .

## Setup husky

```bash
npx husky install
```
