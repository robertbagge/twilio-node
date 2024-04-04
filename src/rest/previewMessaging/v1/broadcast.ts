/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Bulk Messaging and Broadcast
 * Bulk Sending is a public Twilio REST API for 1:Many Message creation up to 100 recipients. Broadcast is a public Twilio REST API for 1:Many Message creation up to 10,000 recipients via file upload.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Details on the statuses of messages sent to recipients
 */
export class MessagingV1BroadcastExecutionDetails {
  /**
   * Number of recipients in the Broadcast request
   */
  "totalRecords"?: number;
  /**
   * Number of recipients with messages successfully sent to them
   */
  "totalCompleted"?: number;
  /**
   * Number of recipients with messages unsuccessfully sent to them, producing an error
   */
  "totalErrors"?: number;
}

/**
 * Options to pass to create a BroadcastInstance
 */
export interface BroadcastListInstanceCreateOptions {
  /** Idempotency key provided by the client */
  xTwilioRequestKey?: string;
}

export interface BroadcastSolution {}

export interface BroadcastListInstance {
  _version: V1;
  _solution: BroadcastSolution;
  _uri: string;

  /**
   * Create a BroadcastInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BroadcastInstance
   */
  create(
    callback?: (error: Error | null, item?: BroadcastInstance) => any
  ): Promise<BroadcastInstance>;
  /**
   * Create a BroadcastInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BroadcastInstance
   */
  create(
    params: BroadcastListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BroadcastInstance) => any
  ): Promise<BroadcastInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BroadcastListInstance(version: V1): BroadcastListInstance {
  const instance = {} as BroadcastListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Broadcasts`;

  instance.create = function create(
    params?:
      | BroadcastListInstanceCreateOptions
      | ((error: Error | null, items: BroadcastInstance) => any),
    callback?: (error: Error | null, items: BroadcastInstance) => any
  ): Promise<BroadcastInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["xTwilioRequestKey"] !== undefined)
      headers["X-Twilio-Request-Key"] = params["xTwilioRequestKey"];

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new BroadcastInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

interface BroadcastPayload extends BroadcastResource {}

interface BroadcastResource {
  broadcast_sid: string;
  created_date: Date;
  updated_date: Date;
  broadcast_status: string;
  execution_details: MessagingV1BroadcastExecutionDetails;
  results_file: string;
}

/**
 * Details of a Broadcast
 */
export class BroadcastInstance {
  constructor(protected _version: V1, payload: BroadcastResource) {
    this.broadcastSid = payload.broadcast_sid;
    this.createdDate = deserialize.iso8601DateTime(payload.created_date);
    this.updatedDate = deserialize.iso8601DateTime(payload.updated_date);
    this.broadcastStatus = payload.broadcast_status;
    this.executionDetails = payload.execution_details;
    this.resultsFile = payload.results_file;
  }

  /**
   * Numeric ID indentifying individual Broadcast requests
   */
  broadcastSid: string;
  /**
   * Timestamp of when the Broadcast was created
   */
  createdDate: Date;
  /**
   * Timestamp of when the Broadcast was last updated
   */
  updatedDate: Date;
  /**
   * Status of the Broadcast request. Valid values are None, Pending-Upload, Uploaded, Queued, Executing, Execution-Failure, Execution-Completed, Cancelation-Requested, and Canceled
   */
  broadcastStatus: string;
  executionDetails: MessagingV1BroadcastExecutionDetails;
  /**
   * Path to a file detailing successful requests and errors from Broadcast execution
   */
  resultsFile: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      broadcastSid: this.broadcastSid,
      createdDate: this.createdDate,
      updatedDate: this.updatedDate,
      broadcastStatus: this.broadcastStatus,
      executionDetails: this.executionDetails,
      resultsFile: this.resultsFile,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
