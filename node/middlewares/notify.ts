import { EventContext, IOClients } from '@vtex/api'

export async function notify(ctx: EventContext<IOClients>) {
  console.log(ctx.body)
  return true;
}
