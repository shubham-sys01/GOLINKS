import React from "react";
import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";
export default async function Page({ params }) {
  let shorturl = (await params).url
  let client = await clientPromise;
  const db = client.db("Golinks");
  const collection = db.collection("urls");
  const mainurl = await collection.findOne({shorten : shorturl })
  if(mainurl){
    let nv = mainurl.visited + 1
    await collection.updateOne({shorten : shorturl }, { $set: { visited: nv } });
    redirect(`${mainurl.url}`)
  }
  else{
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }
}
