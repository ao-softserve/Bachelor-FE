export const scenario = `Prosta prezentacja dla wizualizacji modelu EduA
Autor: Tomasz Primke
Wersja: 1

-- Products     id, name
1,      raw material
2,      product
3,      sold product

-- Actions      id, name, buffer_id
1,      buy raw material,       1
2,      sell product,           3

-- ActionsReqsResults   action_id, req_or_res, type, ref_id, qty
1,      req,    asset,          1,10
1,      res,    product,        1,1
2,      req,    product,        2,1
2,      res,    product,        3,1
2,      res,    asset,          1,30

-- Operations   id, name
1,      make product

-- OperationsReqsResults operation_id, req_or_res, type, ref_id, qty
1,      req,product,1,1
1,      res,product,2,1

-- Modes        id, name
1,      some mode

-- ModeOperations      set_id, operation_id, operation_time
1,      1,      4

-- Machines     id, name
1,      some machine

-- MachineModes         machine_id, set_id, setup_time
1,      1,      10

-- MachineResources     machine_id, resource_id, required
1,      1,      1

-- MachineModeResources machine_id, set_id, resource_id, required

-- Resources id, name, available, operation_time
1,      red,    1,0

-- Buffers      id, name
1,      main input
2,      workstation
3,      main output

-- BufferProducts       buffer_id, product_id, qty

-- Workstations         id, name, buffer_id, machine_id, machine_mode, target_id, status, timer
1, Workstation,         2,1,    null,null,not ready,null

-- Connections  id, from_buffer, to_buffer
1,      1,      2
2,      2,      3

-- ConnectionConstraints        connection_id, product_id
1,      1
2,      2

-- Assets       id, name, initial, value
1,      money,  50

-- Visualization       entity_type, entity_id, x, y
buf, 1, 1, 1
buf, 3, 3, 1
wst, 1, 2, 1
`;
