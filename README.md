# BaatCheet

**Hosted Link**: [https://baatcheet-xhjz.onrender.com](https://baatcheet-xhjz.onrender.com)

## Project Description
BaatCheet is a real-time chat application built with modern web technologies to ensure robust performance, security, and scalability. The application integrates key features like user authentication, real-time messaging, and profile customization, making it an interactive and user-friendly chat platform. This is a personal project created to showcase my development skills on my resume. The project is not open for use, but it is available to view.

## Features

1. **React Application**: Built with React for a dynamic and responsive frontend.
2. **Database**: Integrated with MongoDB Atlas for scalable and secure database storage.
3. **Password Security**: User passwords are hashed using `bcryptjs` for enhanced security.
4. **JWT Authentication**: Secured routes with JWT, using cookie parser and decoder for route protection.
5. **Cloudinary Integration**: Used for storing user profile pictures and chat media files.
6. **Protected Routes**: Authentication checks ensure that only logged-in users can access certain pages like the profile update page.
7. **Frontend Libraries**:
   - **React Router DOM**: For seamless navigation between pages.
   - **React Hot Toast**: For user-friendly notifications (e.g., login, signup success, errors).
   - **Tailwind CSS & DaisyUI**: For simplified and customizable UI design, including multiple theme options.
   - **Lucide React**: For icons and additional UI elements.
8. **Global State Management**: Managed application state with `Zustand`.
9. **CORS Handling**: Configured for secure cross-origin requests.
10. **Socket.IO**:
    - Built a real-time socket server.
    - Displays online users and provides real-time chat updates.
    - Auto-scrolls to the latest messages in chat.
11. **Real-Time Messaging Workflow**:
    - Messages are first stored in the database.
    - If the recipient is online, the message is sent instantly.
12. **Customizable Themes**: Multiple theme options implemented via DaisyUI for better user customization.

## Technical Highlights

- **Socket.IO Implementation**:
  - Created a `socket.js` file and integrated it with the server.
  - Replaced the app server with a Socket.IO server.
  - Messages are synchronized in real-time between online users.

- **Authentication Flow**:
  - Ensures users are authenticated before accessing protected routes.
  - Includes checks to verify user login status before accessing profile update pages.

- **Frontend Improvements**:
  - Tailored chat UI with DaisyUI for sender/receiver differentiation.
  - Notifications and error handling using React Hot Toast.

## Known Issues (To Be Fixed)

1. **Cloudinary Payload Size Limit**: Large files cannot be uploaded due to payload size restrictions.
2. **Profile Picture Updates**: Users cannot update their profile picture more than once.

## Technologies Used

### Frontend:
- React
- React Router DOM
- Tailwind CSS
- DaisyUI
- React Hot Toast
- Lucide React
- Zustand (Global State Management)

### Backend:
- Node.js
- Express.js
- MongoDB Atlas
- bcryptjs (Password Hashing)
- JSON Web Token (JWT)
- Cloudinary (Media Storage)
- CORS

### Real-Time Communication:
- Socket.IO (Real-time updates for messaging and online users)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aditya-1S2/BaatCheet.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BaatCheet
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```
5. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the hosted link in your browser (or `localhost:3000` if running locally).
2. Sign up or log in to start chatting.
3. Customize your profile and use real-time messaging.

## Future Enhancements

- Fixing the Cloudinary payload size limit issue.
- Allowing multiple profile picture updates.
- Adding more features like group chats, read receipts, and advanced search functionality.

## License

This project is not open for use. It is a personal project created for showcasing skills on my resume and can be viewed for reference.

---

### Contributors
- Aditya Sahu

