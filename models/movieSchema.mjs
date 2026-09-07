import { z } from "zod";

export const characterSchema = z.object({
  name: z.string("Name must be a string!").min(1, "Name is required!"),
  house: z.string("House must be a string!").min(1, "House is required!").nullable(),
  species: z.string("Species must be a string!").min(1, "Species is required!"),
  gender: z.string("Gender must be a string!").min(1, "Gender is required!"),
  patronus: z.string("Pa must be a string!").min(1, "Name is required!"),
  role: z.string("Role must be a string!").min(1, "Role is required!"),
});

/*
{
    "id": 1,
    "name": "Harry Potter",
    "house": "Gryffindor",
    "species": "Human",
    "gender": "Male",
    "patronus": "Stag",
    "role": "Student"
},
*/
