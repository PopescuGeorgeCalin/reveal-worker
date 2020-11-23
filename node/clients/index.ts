import { IOClients } from '@vtex/api'
import { VtexClients } from './vtexClients'

export class Clients extends IOClients {
  get vtexClients() {
    return this.getOrSet('vtexClients', VtexClients)
  }
}
