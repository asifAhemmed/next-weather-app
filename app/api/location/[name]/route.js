import { getLocationByName } from "../location-util";

export async function GET(request, { params }) {
  const { name } =  await params;
  const location = getLocationByName(name);

  if (!location) {
    return new Response("Location not found", { status: 404 });
  }

  return Response.json(location);
}