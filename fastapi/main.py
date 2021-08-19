from database import delete, findAll, findById, save
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Employee

app = FastAPI()

origins = [
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def index():
    return {'data': {'employees': [{'name': 'John Doe'}, {'name': 'Jane Doe'}]}}

@app.get('/employees')
async def getEmployees():
    response = await findAll()
    return response

@app.get('/employees/{employee_id}')
async def getEmployee(employee_id: str):
    response = await findById(employee_id)
    return response

@app.post('/employees')
async def saveEmployee(employee: Employee):
    response = await save(employee.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.delete('/employees/{employee_id}')
async def removeEmployee(employee_id: str):
    response = await delete(employee_id)
