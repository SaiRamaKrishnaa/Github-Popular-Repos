
# Github Popular Repos 
live at: https://bestrepos.ccbp.tech/

## Overview

The **Github Popular Repos** project is a React application that displays popular GitHub repositories. It features language filters to view repositories based on the selected programming language. The app handles loading states and error states for better user experience.

![Github Popular Repos Output](https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-output.gif)

## Features

- Fetches popular GitHub repositories based on selected programming languages.
- Displays repositories in a card format with relevant details.
- Handles loading state while fetching data.
- Handles error state if data fetch fails.

## Set Up Instructions

1. Clone the repository:
    ```sh
    git clone https://github.com/SaiRamaKrishnaa/Github-Popular-Repos.git
    cd Github-Popular-Repos
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the application:
    ```sh
    npm start
    ```

## Functionalities

- On initial load, fetches popular repositories with the default language filter set to `ALL`.
- Displays a loader while fetching data.
- Upon successful data fetch, displays the list of repositories.
- On selecting a different language filter, fetches and displays repositories for the selected language.
- Displays an error view if data fetch fails.

## API Requests & Responses

### Github Repos API

#### API: `https://apis.ccbp.in/popular-repos`

#### Example: `https://apis.ccbp.in/popular-repos?language=ALL`

#### Method: `GET`

#### Description:
Returns a response containing the list of popular repositories.

#### Response

```json
{
  "popular_repos": [
    {
      "name": "freeCodeCamp",
      "id": 28457823,
      "issues_count": 154,
      "forks_count": 26651,
      "stars_count": 331304,
      "avatar_url": "https://avatars.githubusercontent.com/u/9892522?v=4"
    },
    ...
  ]
}
```

## Component Structure

![Component Breakdown Structure](https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-component-breakdown-structure.png)

