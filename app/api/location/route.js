import { getLocations } from "./location-util";

export async function GET(){
     const locations = getLocations();

     return Response.json(locations);
}