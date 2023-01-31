interface ContractGenesis {
  id: string //Random uuid

  code_url: string //IPFS CID
  stream_id: string //Stream ID of the manifest
  creators: string[] //list of DIDs that created the contract
}

export interface ContractManifest {
  name: string; //None unique name of the contract
  description: string; //None unique description of the contract
  controllers: string[]; //List of DIDs that have update permission over the control
  code: string;
  lock_block: string;
}

export interface Contract {
  manifest_id: string // the CID of the manifest
  name: string
  code: string
  state_merkle?: string //V0 of contract state
  creation_tx?: string
  created_at?: Date
}

export interface ContractCommitment {
  creation_tx: string
  contract_id: string
  node_id: string
  node_identity: string
  created_at: Date
  latest_state_merkle: string
  latest_update_date: Date
  last_pinged: Date
  pinged_state_merkle: string
}

export interface JsonPatchOp {
  op: string
  path: string
  value: string | object | number
}

//TBD. Define entry points that the contract can interact with
interface EntryPoints {}

interface CoreState {
  stateMap: string //IPFS URL to map of all state variables
}



export interface ContractOutputRaw {
    inputs: Array<{
      id: string
    }>
    state_merkle: string
    //log: JsonPatchOp[]
    //Matrix of subdocuments --> individual logs
    log_matrix: Record<
      string,
      {
        log: JsonPatchOp[]
      }
    >
}
  

export enum InputHeaderFlags {
  INDEX_SEARCH = "index_search"
}

export interface InputHeader {
  flags: Array<InputHeaderFlags>
  sender: {
    id: string
    type: "HIVE" | "DID"
  }
}