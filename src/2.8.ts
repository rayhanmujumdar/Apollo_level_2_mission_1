{
  // asynchronous Typescript
  // Promise
  // fetch data
  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async function (): Promise<Todo | undefined> {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  getTodo();
  // simulate
  // Promise example 1:

  type User = {
    name: string;
    age: number;
    contact: string;
    isMarried: boolean;
  };

  const createPromise = (isNeedData: boolean): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
      const data: User = {
        name: "Rayhan",
        age: 25,
        contact: "01776464695",
        isMarried: false,
      };
      if (isNeedData) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling create promise function
  type Error = string;
  const showData = async function () {
    try {
      const data: User = await createPromise(false);
      console.log(data);
    } catch (err) {
      console.log(err as Error); // using assertion
    }
  };
  showData();

  // Promise example 2:
  const printDelay = async function (elements: string[], millisecond: number) {
    for(const element of elements){
        await delay(400)   
        console.log(element);
    }
  };
  const delay = function (millisecond: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, millisecond);
    });
  };
  printDelay(["Hello", "my", "dear", "bangladesh"], 400);

  //
}
