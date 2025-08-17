# Devonboard Contact-us API

A backend API service for handling contact form submissions for Devonboard website.

## Features

- Store contact form submissions in MongoDB
- View all submissions via web interface
- RESTful API endpoints for managing inquiries
- CORS enabled for cross-origin requests

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS templating
- CORS middleware

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in root directory with following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

4. Start development server:
```bash
npm run dev
```

## API Endpoints

### Get All Inquiries
- **GET** `/devonboard/api/v1/inquires`
- Renders EJS template with all inquiries
- Response: HTML page showing all submissions

### Submit New Inquiry  
- **POST** `/devonboard/api/v1/inquires`
- Body:
```json
{
  "email": "user@example.com",
  "contactData": "Inquiry message"
}
```
- Response:
```json
{
  "statusCode": 201,
  "success": true, 
  "message": "inquire sent successfully",
  "data": {
    "_id": "inquiry_id",
    "email": "user@example.com",
    "contactData": "Inquiry message"
  }
}
```

### Delete Inquiry
- **DELETE** `/devonboard/api/v1/inquires`
- Body:
```json
{
  "inquireId": "inquiry_id"
}
```
- Response:
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Inquire Deleted Successfully",
  "data": {
    "_id": "deleted_inquiry_id",
    "email": "user@example.com",
    "contactData": "Inquiry message"
  }
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- `201`: Resource created successfully
- `200`: Request successful
- `500`: Server error

## Environment Variables

- `PORT`: Server port number (default: 3000)
- `MONGODB_URI`: MongoDB connection string
- `DB_NAME`: Database name (default: devonboardContact)

## Scripts

- `npm run dev`: Start development server with nodemon

## License

ISC