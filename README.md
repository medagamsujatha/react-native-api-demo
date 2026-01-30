## Project Overview
This project is a simple React Native mobile application built to demonstrate core mobile development fundamentals. The app allows users to fetch and view a list of items from a REST API, navigate to a detailed view of a selected item, and submit data through a form to a backend service.
The application focuses on clean code structure, basic navigation, API integration, and proper handling of loading and error states. An optional Flask backend is used to simulate real-world API interactions with in-memory data storage.
This project was developed as part of a technical screening assignment to showcase problem-solving ability, independent learning, and end-to-end feature implementation in a startup-style development environment.

```Project Structure:
react-native-api-demo/
│
├── src/
│   ├── api/
│   │   └── apiService.js        # API calls (GET, POST)
│   │
│   ├── components/
│   │   └── ItemCard.js          # Reusable UI component
│   │
│   ├── screens/
│   │   ├── ListScreen.js        # Displays list of items
│   │   ├── DetailScreen.js      # Shows item details
│   │   └── CreateItemScreen.js # Form to submit new item
│   │
│   ├── navigation/
│   │   └── AppNavigator.js     # Stack navigation setup
│   │
│   └── utils/
│       └── constants.js        # App constants (API URLs, etc.)
│
├── backend/ (optional)
│   └── app.py                  # Flask backend with REST APIs
│
├── App.js                      # App Fug entry point
├── package.json
├── README.md
└── .gi    ```
Project Benifits:
Demonstrates strong understanding of React Native fundamentals
Hands-on experience with REST API integration (GET & POST)
Shows ability to build complete features end-to-end
Improves understanding of navigation and screen flow in mobile apps
Highlights clean code structure and reusable components
Builds confidence in handling loading, error states, and user input
Reflects independent learning and problem-solving skills
Prepares for real-world mobile development in startup environments



