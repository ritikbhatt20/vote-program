use anchor_lang::prelude::*;

declare_id!("66DYCRZmMJSgGGPQQkym6PZcaW1VNZF1hfg6b4Y1Nrk4");

#[program]
pub mod vote_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
