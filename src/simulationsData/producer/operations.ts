export interface Operation {
  id: number;
  name: string;
}

const operations: Operation[] = [
  { id: 1, name: "make a" },
  { id: 2, name: "make b" },
  { id: 3, name: "make c" }
];

export default operations;

// -- Operations   id, name
// 1,      make a
// 2,      make b
// 3,      make c
