{
  // union types
  type Gender = "male" | "female"; // ( | ) this a union types
  type BloodGroup = "O+" | "O-" | "A+" | "AB-" | "B+" | "B-";

  type Frontend = 'Frontend Developer'
  type Backend = 'Backend Developer'

  type SkillType = Frontend | Backend

  type User = {
    name: string;
    email?: string;
    gender: Gender;
    bloodGroup: BloodGroup;
    age: number | null;
    skill: SkillType
  };

  const user: User = {
    name: "Rayhan",
    email: "rayhanmujumdar0177@gmail.com",
    gender: "male",
    bloodGroup: "O+",
    age: 40,
    skill: 'Frontend Developer'
  };

  console.log(user);
  // intersection types
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper; // ( & ) this is a intersection types

  const fullstackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "JS", "NODE", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  console.log(fullstackDeveloper);
}
