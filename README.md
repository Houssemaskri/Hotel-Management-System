# Hotel Management System

This is a Node.js project designed to demonstrate the capabilities of server-side JavaScript. The project includes various features and functionalities to help you get started with Node.js development.

## Features

- RESTful API implementation for managing hotels and rooms
- Database integration with MongoDB
- User authentication and authorization
- Error handling and logging
- Unit and integration testing
- Real-time updates with Socket.io
- Frontend integration with Bootstrap for styling

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/projet-node.git
    ```
2. Navigate to the project directory:
    ```sh
    cd projet-node
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Access the application at `http://localhost:3000`

## API Endpoints

### Hotels

- `GET /hotel/list` - List all hotels
- `POST /hotel/add` - Add a new hotel
- `GET /hotel/getbyid/:id` - Get a hotel by ID
- `DELETE /hotel/delete/:id` - Delete a hotel by ID

### Rooms

- `GET /chambre/list` - List all rooms
- `POST /chambre/add/:id` - Add a new room to a hotel
- `PUT /chambre/reserve/:id/:nom` - Reserve a room
- `GET /chambre/list/:hotelId` - List all rooms for a specific hotel

## Real-time Updates

The project uses Socket.io for real-time updates. When a room is reserved, all connected clients will be notified.

## Frontend

The frontend is styled using Bootstrap. The main page allows users to view and reserve rooms in hotels.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
