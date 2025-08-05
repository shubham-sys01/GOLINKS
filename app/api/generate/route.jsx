// import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
export async function POST(request) {
    let body = await request.json()
    let client = await clientPromise;
    const db = client.db("Golinks")
    const collection = db.collection("urls")
    //to find if the short url already exists
    const findResult = await collection.find({shorten : body.shorten}).toArray();
    
    if(findResult.length !=0){
        return Response.json({success : "failed" , error : "true" , message : "shorten url already exists"})
    }
    const insertResult = await collection.insertOne({
        url : body.url,
        shorten : body.shorten,
        visited: 0
    });
    return Response.json({success : "true" , error : "false" , message : "url generated successfully"})
    
}