/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class Fleet {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async globalCheckpoints (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async globalCheckpoints (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async globalCheckpoints (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async globalCheckpoints (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/${encodeURIComponent(params.index.toString())}/_fleet/global_checkpoints`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async msearch (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async msearch (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async msearch (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async msearch (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = body != null ? 'POST' : 'GET'
      path = `/${encodeURIComponent(params.index.toString())}/_fleet/_fleet_msearch`
    } else {
      method = body != null ? 'POST' : 'GET'
      path = '/_fleet/_fleet_msearch'
    }
    return await this.transport.request({ path, method, querystring, bulkBody: body }, options)
  }

  async search (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async search (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async search (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async search (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = `/${encodeURIComponent(params.index.toString())}/_fleet/_fleet_search`
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
