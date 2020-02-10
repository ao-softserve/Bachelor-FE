export interface Connection {
  id: number;
  from: number;
  to: number;
}

const connections: Connection[] = [
  { id: 1, from: 1, to: 2 },
  { id: 2, from: 2, to: 5 },
  { id: 3, from: 1, to: 3 },
  { id: 4, from: 3, to: 4 },
  { id: 5, from: 4, to: 5 }
];

export default connections;

// -- Connections  id, from_buffer, to_buffer
// 1,      1,      2
// 2,      2,      5
// 3,      1,      3
// 4,      3,      4
// 5,      4,      5
