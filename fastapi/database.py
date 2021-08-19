from model import Employee

import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

database = client.farm
collection = database.employee

async def findById(id):
    employee = await collection.find_one({"employee_id": id})
    return  {'name': employee['name'], 'employee_id': employee['employee_id']}
    
async def findAll():
    employees = []
    list = collection.find({})
    async for item in list:
        employees.append(Employee(**item))
    return employees

async def save(employee):
    document = employee
    res = await collection.insert_one(document)
    return {'name': document['name'], 'employee_id': document['employee_id']}

async def delete(id):
    await collection.delete_one({"employee_id": id})
    return True