import { MOVIES } from "@/lib/data";
import { NextResponse } from "next/server";

// first GET api route
export const GET = async () => {
     try{
          //const res = await fetch();
          return NextResponse.json(MOVIES, {status: 200});
     } catch(error) {
          console.log("Error fetching movies : ", error);
          return NextResponse.json({error : "Internal serer error"}, {status : 500});
     }
};