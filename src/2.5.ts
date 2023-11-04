{
  // Function with generics
  const createWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  createWithGeneric<string>("Bangladesh");
  createWithGeneric<number>(255);

  // generic with Tuples
  const createWithTuple = <T, Y>(param1: T, param2: Y): [T, Y] => {
    return [param1, param2];
  };
  createWithTuple<string, number>("Bangladesh", 244);
  createWithTuple<{ tips: string }, boolean>(
    { tips: "always be honest" },
    true
  );

  //
  const addCourseToStudent = <T>(student: T): T & { course: string } => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };
  type Student1 = {
    name: string;
    email: string,
    skills: string[];
  };
  const student1 = addCourseToStudent<Student1>({
    name: "Rayhan",
    email: 'rayhan@gmail.com',
    skills: ["javascript", "React", "node"],
  });

  type Student2 = {
    name: string;
    email: string;
  };
  const student2 = addCourseToStudent<Student2>({
    name: "sabbir",
    email: "rayhan@gmail.com",
  });
  //
}
