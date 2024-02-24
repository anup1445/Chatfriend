# ChatFriend

ChatFriend is a real-time chat application built with Node.js, Express, and Socket.IO for seamless communication between users. It allows users to join different chat rooms based on their preferences and engage in conversations with other users within the same room. The application provides a simple and intuitive interface for sending and receiving messages instantly.


## Documentation

[Get started with socket.io ](https://socket.io/get-started/chat)

This documentation provides comprehensive instructions for setting up, configuring, and using ChatApp, a real-time chat application built with Node.js, Express, and Socket.IO.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Configuration](#configuration)

## Installation

To install and run ChatApp on your local machine, follow these steps:

1. Clone the repository to your local machine using Git:

   ```
   git clone https://github.com/anup1445/Chatfriend.git
   ```

2. Navigate to the project directory:

   ```
   cd chatFriend
   ```

3. Install project dependencies using npm:

   ```
   npm install
   ```

## Usage

Once you have installed the dependencies, you can start the server using the following command:

```
npm start
```

This will start the server, and you can access the application by opening your web browser and navigating to `http://localhost:3000` (or the appropriate port if you have configured it differently).

### Joining a Chat Room

- Enter your desired username and select a chat room from the available options.
- Click on the "Join Chat" button to enter the selected chat room.

### Sending Messages

- Type your message into the text input at the bottom of the chat interface.
- Press Enter or click the "Send" button to send your message to the chat room.

### Viewing Users

- The sidebar on the right-hand side of the chat interface displays the list of users currently in the same chat room as you.

## Configuration

ChatApp can be configured to meet your specific requirements. Here are some key configuration options:

- **Port**: You can specify the port number on which the server will listen for incoming connections. This can be configured in the `server.js` file.
- **Room Options**: You can customize the available chat rooms and their respective names in the client-side JavaScript code (`main.js`).

Feel free to expand upon this documentation to provide additional details or instructions as needed for your users.
