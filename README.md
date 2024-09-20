# Starwars

This repository contains the Starwars project, organized as a monorepo with several base packages.

Demo: [https://starwars-search-engine.web.app/](https://starwars-search-engine.web.app/)

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Running the Project

To start the development server, use:

```bash
npm run dev
```

## Project Structure and Solution Approach

This project follows a monorepo structure, with the following key packages:

| Package         | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `starwars-api`  | API client for the Starwars API                                         |
| `starwars-ui`   | Shared components for the project                                       |
| `table-system`  | A schema-based table system                                             |
| `form-system`   | A schema-based form system                                              |
| `prompt-system` | A simple prompt system to display confirmation dialogs and form dialogs |

## MUI DataGrid Integration

In the project, I've integrated MUI's DataGrid for enhanced table functionality. To edit the items within the DataGrid, simply double-click on a cell's content to make it editable.

> Note:I've implemented a getAll method that fetches all data from the API. This approach is beneficial for utilizing MUI's advanced DataGrid features such as sorting and filtering on the client-side. However, for real-world applications, it is recommended to handle sorting, filtering, and other CRUD operations on the server-side to improve performance and reduce response latency.

## Data Persistence

Data persistence is implemented via local storage, ensuring that user interactions, such as edits made in the DataGrid, are saved locally and persist across sessions.

## Setup husky

To set up Husky for Git hooks in this project, run:

```bash
npx husky install
```
