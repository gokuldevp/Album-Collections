# Album Management App

## Overview

This React application allows users to manage a collection of albums. Users can view a list of albums, add new albums, update existing ones, and delete albums.

## Features

- **View Albums:** Fetch and display a list of albums from an external API.
- **Add Album:** Add a new album to the collection.
- **Update Album:** Modify the details of an existing album.
- **Delete Album:** Remove an album from the collection.

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
```bash
git clone https://github.com/gokuldevp/Album-Collections.git
```
2. **Navigate to the Project Directory:**
```bash
cd album-management-app
```
3. **Install Dependencies:**
```bash
npm install
```
4. **Run the Application**
```bash
npm start
```
Note: The app should be accessible at http://localhost:3000 in your web browser.

## Project Structure
```bash
album-management-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddAlbum.js
│   │   ├── Album.js
│   │   ├── AlbumList.js
│   │   ├── NavBar.js
│   │   ├── App.js
│   │   └── Index.js
│   ├── hooks/
│   │   └── handleAlbum.js  
│   ├── styles/
│   │   ├── AddAlbum.css
│   │   ├── Album.css
│   │   ├── AlbumList.css
│   │   ├── NavBar.css
│   │   ├── App.css
│   │   └── Index.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```
## Dependencies
1. React
2. axios
3. node js

## Usage

1. **View Albums:**
   - Launch the application by running `npm start` in the project directory.
   - Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).
   - The main page displays a list of albums fetched from an external API.

2. **Add Album:**
   - Fill out the form with the details of the new album.
   - Click the "Add Album" button to add the album to the collection.
   - The new album will be displayed in the list.

3. **Update Album:**
   - On the main page, find the album you want to update.
   - Click the "Edit" button next to the album.
   - Modify the details in the form.
   - Click the "Update Album" button to save the changes.
   - The updated information will be reflected in the album list.

4. **Delete Album:**
   - On the main page, find the album you want to delete.
   - Click the "Delete" button next to the album.
   - Confirm the deletion when prompted.
   - The album will be removed from the collection.

5. **Customize Components:**
   - Explore the `src/components/` directory to understand the structure of individual components.
   - Customize or extend components as needed for your specific requirements.

6. **Explore Hooks:**
   - The `src/hooks/` directory contains custom hooks for handling album-related functionalities. Feel free to explore and modify these hooks based on your needs.

## Deployment

The application is deployed and can be accessed through the following link: [Album Management App](https://album-collections-cows.onrender.com/).
"# Album-Collections" 
