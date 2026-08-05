// import { MOVIES } from "@/lib/data";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// first GET api route
export const GET = async () => {
  try {
    //const res = await fetch();
    const movies = await db.collection("movies").find({}).sort({metacritic: -1}).limit(50).toArray();
    // return NextResponse.json(MOVIES, {status: 200});
    return NextResponse.json(movies);
  } catch (error) {
    console.log("Error fetching movies : ", error);
    return NextResponse.json(
      { error: "Internal serer error" },
      { status: 500 },
    );
  }
};
