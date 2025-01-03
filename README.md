## Pokedex App
A modern and interactive Pokedex application built with React, leveraging the Pokémon API to display detailed Pokémon data. Explore Pokémon stats, navigate through pages, and view individual Pokémon details.

## Features
- **Search Functionality:** Quickly find Pokémon by name.
- **Paginated List:** Browse through the Pokémon list with "Next" and "Previous" buttons.
- **Detailed Pokémon Profiles:** View Pokémon stats, images, types, weight, and height.
- **Responsive Design:** Adapts seamlessly to different devices.
- **Dynamic Navigation:** Built with `react-router-dom` for smooth routing.

**Technologies Used**
- **Frontend:** React, JSX, CSS
- **Routing:** React Router DOM
- **API Integration:** Axios

**Installation and Setup**

Follow these steps to set up and run the Pokedex app locally:

**Prerequisites**

- Node.js (v16 or higher)
- npm or yarn installed

**Clone the Repository**

```
git clone https://github.com/mukeshwebdp/pokedex-app.git
cd pokedex-app
npm install

```
**Install Dependencies**: `npm install`


**Start the Application:**  `npm start`


**Project Structure**

```
pokedex-app/
├── public/                 # Static files
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── Search/         # Search component
│   │   ├── pokemonList/    # List of Pokémon
│   │   └── pokemon.jsx/    # Individual Pokémon card
│   ├── route/              # App routing logic
│   ├── styles/             # CSS and styling
│   ├── App.jsx             # Main application entry point
│   └── index.js            # React app bootstrap file
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration (if applicable)
└── README.md               # Project documentation


```

**Key Components**

`app.jsx`
- The main component integrating navigation and routes.

`Pokedex.jsx`
- Displays the search bar and Pokémon list.

`PokemonList.jsx`
- Handles fetching and rendering Pokémon cards with pagination.

`pokemon.jsx`
- Renders individual Pokémon cards with links to detailed profiles.

`PokemonDetails.jsx`
- Displays detailed information about a selected Pokémon.

`Search.jsx`
- Provides a simple text input for searching Pokémon by name.
Provides a simple text input for searching Pokémon by name.

**API Integration**

This app uses PokéAPI to fetch data about Pokémon. The following endpoints are utilized

- `/pokemon`: Fetches a list of Pokémon with pagination.

- `pokemon/{id}`: Fetches detailed data for a specific Pokémon.

**Usage**
- **View Pokémon:** Open the app to see a paginated list of Pokémon.
- **Search Pokemon:** Enter a Pokemon name in the search bar to filter results.
- **Navigate Pages:** Use the "Next" and "Previous" buttons to browse the Pokemon list.
- **View Details:** Click on a Pokemon card to view detailed information.
