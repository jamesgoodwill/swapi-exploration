import { Subject } from "rxjs";

export default function testObserver() {
  const database = new Subject();

  const project1 = database.subscribe((v) => console.log(v + "from project1"));
  const project2 = database.subscribe((v) => console.log(v + "from project2"));
  const project3 = database.subscribe((v) => console.log(v + "from project3"));

  database.next("Task1 ");
  database.next("Task77 ");

  project1.unsubscribe();

  database.next("Secret Task ");
}
