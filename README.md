# Leitnerbox

Leitnerbox is a web application built with React that helps users learn and memorize vocabulary using the Leitner System—a well-known spaced repetition technique. The app supports English-German vocabulary learning and leverages OpenAI GPT to generate new vocabulary flashcards with example sentences.

## Features

- **Spaced Repetition Learning:** Organize flashcards in different "boxes" according to the Leitner system. Progress cards by successfully recalling them.
- **English-German Vocabulary:** Store and review vocabulary pairs with example sentences.
- **AI-Powered Flashcard Generation:** Use OpenAI GPT to generate English words, their German translations, and example sentences in English.
- **CRUD Operations:** Add, edit, and delete vocabulary flashcards.
- **Password Protection:** Simple authentication to restrict access.
- **Persistent Storage:** Flashcards are stored and retrieved from a backend server.
- **Search Functionality:** Search among your vocabulary cards.
- **Responsive UI:** Built with React Bootstrap for a modern look and feel.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (>=14)
- [npm](https://www.npmjs.com/)
- [A backend server](https://github.com/Mamali99/Leitnerbox-backend) (or your own implementation with compatible endpoints)
- OpenAI API key (for GPT-powered flashcard generation)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mamali99/Leitnerbox.git
   cd Leitnerbox
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add:
   ```
   REACT_APP_PASSWORD=your_password_here
   REACT_APP_IP=your_backend_ip_or_localhost
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```

4. **Start the application:**
   ```bash
   npm start
   ```
   Access the app at [http://localhost:3000](http://localhost:3000)

## Usage

- **Add Vocabulary:**
  - Use the form to add new English-German vocabulary with example sentences.
  - Or use the "Get the answer from api" button to generate vocabulary via GPT.
- **Review & Progress:**
  - Cards start in the reserved box and move through levels as you review them correctly.
  - Completed cards appear in a separate section.
- **Edit/Delete:** Modify or remove cards as needed.
- **Authentication:** Enter the password on first load to access the app.

## Project Structure

```
Leitnerbox/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Gpt-api.js       # OpenAI GPT integration for generating flashcards
│   │   ├── Box_0.js         # Reserved cards
│   │   ├── BoxList.js       # Main Leitner boxes
│   │   ├── CompletedCards.js# Completed cards section
│   │   ├── VocabularyForm.js# Add/edit vocabulary
│   │   ├── Search.js        # Search functionality
│   │   └── useFetch.js      # Custom hook for fetching data
│   ├── App.js               # Main application logic
│   └── index.js
└── README.md
```

## Environment Variables

- `REACT_APP_PASSWORD`: The password for accessing the app.
- `REACT_APP_IP`: The IP address or hostname of the backend server.
- `REACT_APP_OPENAI_API_KEY`: Your OpenAI API key for GPT integration.

## Scripts

In the project directory, you can run:

- `npm start` — Runs the app in development mode.
- `npm test` — Launches the test runner.
- `npm run build` — Builds the app for production.
- `npm run eject` — Ejects the configuration for advanced customization.

## Backend API

The app expects a backend with the following endpoints (example using Express, see [Leitnerbox-backend](https://github.com/Mamali99/Leitnerbox-backend)):

- `GET /api/get` — Retrieve all flashcards
- `POST /api/insert` — Add a new flashcard
- `PUT /api/editCard` — Edit an existing flashcard
- `DELETE /api/delete/:id` — Delete a flashcard

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
