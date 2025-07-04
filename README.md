# LangChain Chatbot

This is a full-stack chatbot application built with LangChain, FastAPI, and React.

## Setup and Running

### 1. Backend

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment and activate it:**
    ```bash
    python -m venv venv
    .\venv\Scripts\activate
    ```

3.  **Install the required packages:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Add your OpenAI API key:**
    Open the `.env` file and add your OpenAI API key:
    ```
    OPENAI_API_KEY=your_api_key_here
    ```

5.  **Run the backend server:**
    ```bash
    uvicorn main:app --reload
    ```
    The backend will be running at `http://localhost:8000`.

### 2. Frontend

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2.  **Install the required packages:**
    ```bash
    npm install
    ```

3.  **Run the frontend server:**
    ```bash
    npm start
    ```
    The frontend will be running at `http://localhost:3000` and will connect to the backend.
