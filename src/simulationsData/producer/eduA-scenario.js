export const spec = `
Prosta prezentacja dla wizualizacji modelu EduA
Autor: Tomasz Primke
Wersja: 1

-- Products     id, name
1,      raw 
2,      prod 
3,      sold 
4,      prod b

-- Actions      id, name, buffer_id
1,      buy raw,        1
2,      sell prod,      5
3,      add raw,        1


-- ActionsReqsResults   action_id, req_or_res, type, ref_id, qty
1,      req,    asset,          1,10
2,      req,    product,        2,1
2,      res,    asset,          1,40
2,      res,    product,        3,1
3,      res,    product,        1,1

-- Operations   id, name
1,      make a
2,      make b
3,      make c

-- OperationsReqsResults operation_id, req_or_res, type, ref_id, qty
1,      req,product,1,1
1,      res,product,2,1
2,      req,product,1,1
2,      res,product,4,1
3,      req,product,4,1
3,      res,product,2,1

-- Modes        id, name
1,      mode a
2,      mode b
3,      mode c

-- ModeOperations      set_id, operation_id, operation_time
1,      1,      2
2,      2,      1
3,      3,      2

-- Machines     id, name
1,      machine for a
2,      machine for b
3,      machine for c

-- MachineModes         machine_id, set_id, setup_time
1,      1,      5
2,      2,      10
3,      3,      3

-- MachineResources     machine_id, resource_id, required
1,      1,      1
2,      2,      1
3,      3,      1

-- MachineModeResources machine_id, set_id, resource_id, required

-- Resources id, name, available, operation_time
1,      red,    1,0
2,      green,  1,0
3,      blue,   1,0

-- Buffers      id, name
1,      main input
2,      wst a
3,      wst b
4,      wst c
5,      main output

-- BufferProducts       buffer_id, product_id, qty

-- Workstations         id, name, buffer_id, machine_id, machine_mode, target_id, status, timer
1, Workstation A,       2,1,    null,null,not ready,null
2, Workstation B,       3,2,    null,null,not ready,null
3, Workstation C,       4,3,    null,null,not ready,null

-- Connections  id, from_buffer, to_buffer
1,      1,      2
2,      2,      5
3,      1,      3
4,      3,      4
5,      4,      5

-- ConnectionConstraints        connection_id, product_id
1,      1
2,      2
3,      1
4,      4
5,      2

-- Assets       id, name, initial, value
1,      money,  3000

-- Visualization       entity_type, entity_id, x, y
buf, 1, 1, 1
wst, 1, 3, 1
wst, 2, 1, 2
wst, 3, 2, 2
buf, 5, 3, 2
`;
