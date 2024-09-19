# Front End Developer Home Assignment: Creating a Starwars search application

## Overview:

Your task is to create a search application based on the StarWars API (https://swapi.dev). The main page should display a
search field (autocomplete). When a user types, the autocomplete will display some search results per category and the
option to open a category page. The category page will show all the results and option to edit them.

## Detailed requirements:

### Search page:

As the user types, the search term should be searched in all entities of the API (films, people, planets, etc...) as described in
the API’s docs. For example, the URL for searching “L” in “people” is https://swapi.dev/api/people?search=L. The results
should be divided into categories, accordingly, showing a maximum of top 3 matches for each category (display only the
name/title field from the result). At the bottom of each category, there should be a button with the caption “View All”, leading
to the category’s page.

### Category page:

A click on “View All” should lead to the category page. You are required to implement only one list page - the people page -
all other category pages will be blank with a title only. On the people page, the results will be displayed as a table with the
option to delete or edit each row. Don’t display other entities' data in the table (vehicles, films, etc..), only the basic fields.
Above the table add a “Create” button - which allows adding a new character. Since there is no API for create/edit/delete,
you will handle it locally and there’s no need for persistence - refreshing the page will just reload the initial data.

## Guidelines:

● Use React and TypeScript (latest versions) for development.
● Pay attention to the UI/UX to ensure an eye catching and delightful user experience (show us your creativity)
● Include clear instructions on how to run the application locally and any additional notes or considerations
(preferable readme file).
Submission:
● Please provide a GitHub repository link containing your project.
Feel free to reach out if you have any questions or need clarification on any aspect of the assignment. Good luck!
