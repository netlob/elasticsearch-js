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

export default class Eql {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async delete (this: That, params: T.EqlDeleteRequest | TB.EqlDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EqlDeleteResponse>
  async delete (this: That, params: T.EqlDeleteRequest | TB.EqlDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EqlDeleteResponse, unknown>>
  async delete (this: That, params: T.EqlDeleteRequest | TB.EqlDeleteRequest, options?: TransportRequestOptions): Promise<T.EqlDeleteResponse>
  async delete (this: That, params: T.EqlDeleteRequest | TB.EqlDeleteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_eql/search/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async get<TEvent = unknown> (this: That, params: T.EqlGetRequest | TB.EqlGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EqlGetResponse<TEvent>>
  async get<TEvent = unknown> (this: That, params: T.EqlGetRequest | TB.EqlGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EqlGetResponse<TEvent>, unknown>>
  async get<TEvent = unknown> (this: That, params: T.EqlGetRequest | TB.EqlGetRequest, options?: TransportRequestOptions): Promise<T.EqlGetResponse<TEvent>>
  async get<TEvent = unknown> (this: That, params: T.EqlGetRequest | TB.EqlGetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_eql/search/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getStatus (this: That, params: T.EqlGetStatusRequest | TB.EqlGetStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EqlGetStatusResponse>
  async getStatus (this: That, params: T.EqlGetStatusRequest | TB.EqlGetStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EqlGetStatusResponse, unknown>>
  async getStatus (this: That, params: T.EqlGetStatusRequest | TB.EqlGetStatusRequest, options?: TransportRequestOptions): Promise<T.EqlGetStatusResponse>
  async getStatus (this: That, params: T.EqlGetStatusRequest | TB.EqlGetStatusRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_eql/search/status/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async search<TEvent = unknown> (this: That, params: T.EqlSearchRequest | TB.EqlSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EqlSearchResponse<TEvent>>
  async search<TEvent = unknown> (this: That, params: T.EqlSearchRequest | TB.EqlSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EqlSearchResponse<TEvent>, unknown>>
  async search<TEvent = unknown> (this: That, params: T.EqlSearchRequest | TB.EqlSearchRequest, options?: TransportRequestOptions): Promise<T.EqlSearchResponse<TEvent>>
  async search<TEvent = unknown> (this: That, params: T.EqlSearchRequest | TB.EqlSearchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['query', 'case_sensitive', 'event_category_field', 'tiebreaker_field', 'timestamp_field', 'fetch_size', 'filter', 'keep_alive', 'keep_on_completion', 'wait_for_completion_timeout', 'size', 'fields', 'result_position']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: Record<string, any> | string
    if (typeof userBody === 'string') {
      body = userBody
    } else {
      body = userBody != null ? { ...userBody } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = `/${encodeURIComponent(params.index.toString())}/_eql/search`
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
