import { IOContext, InstanceOptions, ExternalClient } from "@vtex/api";

export class VtexClients extends ExternalClient {
  constructor(protected context: IOContext, options?: InstanceOptions) {
    super(
      `http://${context.account}.vtexcommercestable.com.br`,
      context,
      {
        ...(options ?? {}),
        headers: {
          ...(options?.headers ?? {}),
          'VtexIdclientAutCookie': context.authToken,
          'Content-Type': 'application/json',
          'X-Vtex-Use-Https': 'true',
        },
      }
    )
  }
}
