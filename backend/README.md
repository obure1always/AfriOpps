# Opportunities Database Backend

This is the backend API for the Opportunities Database application built with FastAPI.

## Setup

1. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the development server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, you can access:
- Interactive API docs (Swagger UI): `http://localhost:8000/docs`
- Alternative API docs (ReDoc): `http://localhost:8000/redoc`

## Available Endpoints

- `GET /`: Welcome message
- `GET /opportunities`: List all opportunities
- `GET /opportunities/{opportunity_id}`: Get a specific opportunity
- `POST /opportunities`: Create a new opportunity
- `PUT /opportunities/{opportunity_id}`: Update an existing opportunity
- `DELETE /opportunities/{opportunity_id}`: Delete an opportunity

## Development

This is a development version using in-memory storage. For production:
1. Add a proper database (e.g., PostgreSQL)
2. Implement user authentication
3. Add proper error handling
4. Configure CORS for your frontend domain
5. Add rate limiting and other security measures 