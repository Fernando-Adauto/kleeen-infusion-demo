import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiJeans extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://put.your.api.here/';
    // You can access the token, data sources,
    // and the current user through 'this.context'.
  }

  willSendRequest(request: RequestOptions) {
    // Uncomment the following line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Uncomment the following line to set params token.
    // request.params.set('api_key', this.context.token);
  }

  // Add Jeans
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('jeans', entity);

    // Sample HTTP POST request.
    // return this.post('jeans', entity);
  }

  // Delete Jeans
  async deleteEntity(id: string) {
    return KapiCrud.delete('jeans', id);

    // Sample HTTP DELETE request.
    // return this.delete(`jeans/${id}`);
  }

  // List Jeans
  async listEntity(params: any) {
    return KapiCrud.list('jeans', params);

    // Sample HTTP GET request.
    // return this.get('jeans', params);
  }

  // Get Jeans
  async getEntity(id: string) {
    return KapiCrud.get('jeans', id);

    // Sample HTTP GET request.
    // return this.get(`jeans/${id}`);
  }

  // Update Jeans
  async updateEntity(entity) {
    return KapiCrud.update('jeans', entity);

    // Sample HTTP PATCH request.
    // return this.patch(jeans, entity);
  }

  // Auto complete for Jeans
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('jeans');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.jeans }));
  }
}
