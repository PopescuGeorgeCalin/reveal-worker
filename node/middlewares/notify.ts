import { EventContext, IOClients } from '@vtex/api'

export async function notify(ctx: EventContext<IOClients>) {
  const {
    clients: { masterdata }, body
  } = ctx
  const { CustomerExternalID, RFMScore } = body;
  const response = await masterdata.updatePartialDocument({
    dataEntity: "CL",
    id: CustomerExternalID,
    fields: {
      "rfmScore": 1*RFMScore
    }
  })

  console.log(response);

  return true;
}
