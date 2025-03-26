# AfriOpps - African Opportunities Database Platform

AfriOpps is a modern web application designed to connect African talent with opportunities across the continent. The platform offers a comprehensive database of jobs, internships, and scholarships, making it easier for African professionals and students to discover and apply for opportunities that match their skills and aspirations.

## Features

- Dynamic category pages for jobs, internships, and scholarships
- Advanced search and filtering capabilities
- User authentication and profile management
- Save opportunities for later
- Responsive design for all devices
- Newsletter subscription
- Interactive opportunity cards
- Terms of Service and Privacy Policy pages
- About and Help Center pages

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- FastAPI (Backend)
- PostgreSQL (Database)

## Project Structure

```
afri-opps/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (main)/            # Main application routes
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components
│   │   └── opportunities/    # Opportunity-related components
│   └── types/                # TypeScript type definitions
├── public/                    # Static assets
├── backend/                   # FastAPI backend
│   ├── main.py               # Main FastAPI application
│   └── requirements.txt      # Python dependencies
└── package.json              # Frontend dependencies
```

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/obure1always/AfriOpps.git
cd AfriOpps
```

2. Install frontend dependencies:
```bash
npm install
# or
yarn install
```

3. Set up the backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

4. Run the development servers:

Frontend:
```bash
npm run dev
# or
yarn dev
```

Backend:
```bash
cd backend
python main.py
```

5. Open your browser and navigate to:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## Development

### Frontend
- Built with Next.js 14 and TypeScript
- Uses Tailwind CSS for styling
- Implements modern React patterns and hooks
- Follows responsive design principles
- Includes comprehensive error handling

### Backend
- FastAPI for high-performance API
- Pydantic models for data validation
- SQLAlchemy for database operations
- JWT authentication
- CORS configuration for frontend integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Email - [j.obure1@alustudent.com]
Project Link: [https://afri-opps.vercel.app/](https://afri-opps.vercel.app/) 