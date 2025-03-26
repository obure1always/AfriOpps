from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import uvicorn

app = FastAPI(title="Opportunities Database API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class OpportunityBase(BaseModel):
    title: str
    description: str
    deadline: datetime
    type: str
    status: str
    requirements: List[str]
    benefits: List[str]
    location: str
    organization: str
    link: str
    tags: List[str]
    eligibility: List[str]

class OpportunityCreate(OpportunityBase):
    pass

class Opportunity(OpportunityBase):
    id: str
    createdAt: datetime
    createdBy: str

    class Config:
        from_attributes = True

# Sample data
opportunities_db = [
    {
        "id": "1",
        "title": "Software Engineering Internship",
        "description": "3-month internship opportunity",
        "deadline": datetime.now(),
        "type": "internship",
        "status": "open",
        "requirements": ["Python", "JavaScript"],
        "benefits": ["Paid internship", "Remote work"],
        "location": "Remote",
        "organization": "Tech Corp",
        "link": "https://example.com/intern",
        "tags": ["technology", "software"],
        "eligibility": ["Students", "Recent graduates"],
        "createdAt": datetime.now(),
        "createdBy": "admin"
    }
]

@app.get("/")
async def root():
    return {"message": "Welcome to the Opportunities Database API"}

@app.get("/opportunities", response_model=List[Opportunity])
async def get_opportunities():
    return opportunities_db

@app.get("/opportunities/{opportunity_id}", response_model=Opportunity)
async def get_opportunity(opportunity_id: str):
    opportunity = next((opp for opp in opportunities_db if opp["id"] == opportunity_id), None)
    if not opportunity:
        raise HTTPException(status_code=404, detail="Opportunity not found")
    return opportunity

@app.post("/opportunities", response_model=Opportunity)
async def create_opportunity(opportunity: OpportunityCreate):
    opportunity_dict = opportunity.dict()
    opportunity_dict["id"] = str(len(opportunities_db) + 1)
    opportunity_dict["createdAt"] = datetime.now()
    opportunity_dict["createdBy"] = "admin"
    
    opportunities_db.append(opportunity_dict)
    return opportunity_dict

@app.put("/opportunities/{opportunity_id}", response_model=Opportunity)
async def update_opportunity(opportunity_id: str, opportunity: OpportunityCreate):
    index = next((i for i, opp in enumerate(opportunities_db) if opp["id"] == opportunity_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Opportunity not found")
    
    opportunity_dict = opportunity.dict()
    opportunity_dict["id"] = opportunity_id
    opportunity_dict["createdAt"] = opportunities_db[index]["createdAt"]
    opportunity_dict["createdBy"] = opportunities_db[index]["createdBy"]
    
    opportunities_db[index] = opportunity_dict
    return opportunity_dict

@app.delete("/opportunities/{opportunity_id}")
async def delete_opportunity(opportunity_id: str):
    index = next((i for i, opp in enumerate(opportunities_db) if opp["id"] == opportunity_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Opportunity not found")
    
    opportunities_db.pop(index)
    return {"message": "Opportunity deleted successfully"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True) 