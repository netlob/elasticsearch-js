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

export default async function UpdateApi<TDocument = unknown, TPartialDocument = unknown, TDocumentR = unknown> (this: That, params: T.UpdateRequest<TDocument, TPartialDocument> | TB.UpdateRequest<TDocument, TPartialDocument>, options?: TransportRequestOptionsWithOutMeta): Promise<T.UpdateResponse<TDocumentR>>
export default async function UpdateApi<TDocument = unknown, TPartialDocument = unknown, TDocumentR = unknown> (this: That, params: T.UpdateRequest<TDocument, TPartialDocument> | TB.UpdateRequest<TDocument, TPartialDocument>, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.UpdateResponse<TDocumentR>, unknown>>
export default async function UpdateApi<TDocument = unknown, TPartialDocument = unknown, TDocumentR = unknown> (this: That, params: T.UpdateRequest<TDocument, TPartialDocument> | TB.UpdateRequest<TDocument, TPartialDocument>, options?: TransportRequestOptions): Promise<T.UpdateResponse<TDocumentR>>
export default async function UpdateApi<TDocument = unknown, TPartialDocument = unknown, TDocumentR = unknown> (this: That, params: T.UpdateRequest<TDocument, TPartialDocument> | TB.UpdateRequest<TDocument, TPartialDocument>, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['id', 'index', 'type']
  const acceptedBody: string[] = ['detect_noop', 'doc', 'doc_as_upsert', 'script', 'scripted_upsert', '_source', 'upsert']
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

  const method = 'POST'
  const path = `/${encodeURIComponent(params.index.toString())}/_update/${encodeURIComponent(params.id.toString())}`
  return await this.transport.request({ path, method, querystring, body }, options)
}
