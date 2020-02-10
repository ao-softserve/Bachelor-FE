export interface MachineResource {
  machineId: number;
  resourceId: number;
  required: number;
}

const machinesResources: MachineResource[] = [
  { machineId: 1, resourceId: 1, required: 1 },
  { machineId: 2, resourceId: 2, required: 1 },
  { machineId: 3, resourceId: 3, required: 1 }
];

export default machinesResources;

// -- MachineResources     machine_id, resource_id, required
// 1,      1,      1
// 2,      2,      1
// 3,      3,      1
