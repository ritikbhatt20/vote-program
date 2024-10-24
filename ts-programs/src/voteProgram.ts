import {
  Account,
  Pubkey,
  type Result,
  i64,
  u8,
  Signer,
} from "@solanaturbine/poseidon";

export default class VoteProgram {
  static PROGRAM_ID = new Pubkey("11111111111111111111111111111111");

  // Pass all the accounts we need as the parameters
  initialize(state: VoteState, user: Signer): Result {
    // Use `.derive([seed])` to define the PDA and chain the `.init()` at the end for creating the account
    state.derive(["vote"]).init();

    // Set the initial value to the `vote` field of the account
    state.vote = new i64(0);
  }

  upvote(state: VoteState): Result {
    state.derive(["vote"]);
    state.vote = state.vote.add(1);
  }

  downvote(state: VoteState): Result {
    state.derive(["vote"]);
    state.vote = state.vote.sub(1);
  }
}

export interface VoteState extends Account {
  vote: i64; // This field store the voting result
  bump: u8; // bump is for PDA (program derieved account, a special type of account which controlled by program on Solana)
}
