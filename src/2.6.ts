{
  //  constraints in typescript
  type UserInfo = { name: string; email: string };
  const addCourseToStudent = <T extends UserInfo>( // generic type param value must have UserInfo property
    student: T
  ): T & { course: string } => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "Rayhan",
    email: "rayhan@gmail.com",
    skills: ["javascript", "React", "node"],
  });
  const student2 = addCourseToStudent({
    name: "sabbir",
    email: "rayhan@gmail.com",
  });
//   const student3 = addCourseToStudent({ disgusting: "very poor" }); //
  // error
  /* 
    Argument of type '{ disgusting: string; }' is not assignable to parameter of type 'UserInfo'.
  Object literal may only specify known properties, and 'disgusting' does not exist in type 'UserInfo'.
  */
  //
}
