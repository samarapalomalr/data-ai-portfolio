from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS (permite o frontend acessar)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ROTA TESTE
@app.get("/")
def home():
    return {"message": "API rodando no Render 🚀"}

# EXEMPLO DE ENDPOINT
@app.get("/insights")
def get_insights():
    return {
        "status": "ok",
        "data": "Aqui vão seus insights da IA"
    }