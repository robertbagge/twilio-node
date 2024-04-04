/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to fetch a PluginReleaseInstance
 */
export interface PluginReleaseContextFetchOptions {
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
}

/**
 * Options to pass to create a PluginReleaseInstance
 */
export interface PluginReleaseListInstanceCreateOptions {
  /** The SID or the Version of the Flex Plugin Configuration to release. */
  configurationId: string;
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
}
/**
 * Options to pass to each
 */
export interface PluginReleaseListInstanceEachOptions {
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: PluginReleaseInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface PluginReleaseListInstanceOptions {
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface PluginReleaseListInstancePageOptions {
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface PluginReleaseContext {
  /**
   * Fetch a PluginReleaseInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginReleaseInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PluginReleaseInstance) => any
  ): Promise<PluginReleaseInstance>;
  /**
   * Fetch a PluginReleaseInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginReleaseInstance
   */
  fetch(
    params: PluginReleaseContextFetchOptions,
    callback?: (error: Error | null, item?: PluginReleaseInstance) => any
  ): Promise<PluginReleaseInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PluginReleaseContextSolution {
  sid: string;
}

export class PluginReleaseContextImpl implements PluginReleaseContext {
  protected _solution: PluginReleaseContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/PluginService/Releases/${sid}`;
  }

  fetch(
    params?:
      | PluginReleaseContextFetchOptions
      | ((error: Error | null, item?: PluginReleaseInstance) => any),
    callback?: (error: Error | null, item?: PluginReleaseInstance) => any
  ): Promise<PluginReleaseInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["flexMetadata"] !== undefined)
      headers["Flex-Metadata"] = params["flexMetadata"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PluginReleaseInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface PluginReleasePayload extends TwilioResponsePayload {
  releases: PluginReleaseResource[];
}

interface PluginReleaseResource {
  sid: string;
  account_sid: string;
  configuration_sid: string;
  date_created: Date;
  url: string;
}

export class PluginReleaseInstance {
  protected _solution: PluginReleaseContextSolution;
  protected _context?: PluginReleaseContext;

  constructor(
    protected _version: V1,
    payload: PluginReleaseResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.configurationSid = payload.configuration_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Plugin Release resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Plugin Release resource and owns this resource.
   */
  accountSid: string;
  /**
   * The SID of the Plugin Configuration resource to release.
   */
  configurationSid: string;
  /**
   * The date and time in GMT when the Flex Plugin Release was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The absolute URL of the Plugin Release resource.
   */
  url: string;

  private get _proxy(): PluginReleaseContext {
    this._context =
      this._context ||
      new PluginReleaseContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a PluginReleaseInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginReleaseInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PluginReleaseInstance) => any
  ): Promise<PluginReleaseInstance>;
  /**
   * Fetch a PluginReleaseInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginReleaseInstance
   */
  fetch(
    params: PluginReleaseContextFetchOptions,
    callback?: (error: Error | null, item?: PluginReleaseInstance) => any
  ): Promise<PluginReleaseInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: PluginReleaseInstance) => any
  ): Promise<PluginReleaseInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      configurationSid: this.configurationSid,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PluginReleaseSolution {}

export interface PluginReleaseListInstance {
  _version: V1;
  _solution: PluginReleaseSolution;
  _uri: string;

  (sid: string): PluginReleaseContext;
  get(sid: string): PluginReleaseContext;

  /**
   * Create a PluginReleaseInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginReleaseInstance
   */
  create(
    params: PluginReleaseListInstanceCreateOptions,
    callback?: (error: Error | null, item?: PluginReleaseInstance) => any
  ): Promise<PluginReleaseInstance>;

  /**
   * Streams PluginReleaseInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PluginReleaseListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: PluginReleaseInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: PluginReleaseListInstanceEachOptions,
    callback?: (
      item: PluginReleaseInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of PluginReleaseInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: PluginReleasePage) => any
  ): Promise<PluginReleasePage>;
  /**
   * Lists PluginReleaseInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PluginReleaseListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: PluginReleaseInstance[]) => any
  ): Promise<PluginReleaseInstance[]>;
  list(
    params: PluginReleaseListInstanceOptions,
    callback?: (error: Error | null, items: PluginReleaseInstance[]) => any
  ): Promise<PluginReleaseInstance[]>;
  /**
   * Retrieve a single page of PluginReleaseInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PluginReleaseListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: PluginReleasePage) => any
  ): Promise<PluginReleasePage>;
  page(
    params: PluginReleaseListInstancePageOptions,
    callback?: (error: Error | null, items: PluginReleasePage) => any
  ): Promise<PluginReleasePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PluginReleaseListInstance(
  version: V1
): PluginReleaseListInstance {
  const instance = ((sid) => instance.get(sid)) as PluginReleaseListInstance;

  instance.get = function get(sid): PluginReleaseContext {
    return new PluginReleaseContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/PluginService/Releases`;

  instance.create = function create(
    params: PluginReleaseListInstanceCreateOptions,
    callback?: (error: Error | null, items: PluginReleaseInstance) => any
  ): Promise<PluginReleaseInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["configurationId"] === null ||
      params["configurationId"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['configurationId']\" missing."
      );
    }

    let data: any = {};

    data["ConfigurationId"] = params["configurationId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["flexMetadata"] !== undefined)
      headers["Flex-Metadata"] = params["flexMetadata"];

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new PluginReleaseInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | PluginReleaseListInstancePageOptions
      | ((error: Error | null, items: PluginReleasePage) => any),
    callback?: (error: Error | null, items: PluginReleasePage) => any
  ): Promise<PluginReleasePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    if (params["flexMetadata"] !== undefined)
      headers["Flex-Metadata"] = params["flexMetadata"];

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PluginReleasePage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: PluginReleasePage) => any
  ): Promise<PluginReleasePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new PluginReleasePage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
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

export class PluginReleasePage extends Page<
  V1,
  PluginReleasePayload,
  PluginReleaseResource,
  PluginReleaseInstance
> {
  /**
   * Initialize the PluginReleasePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: PluginReleaseSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of PluginReleaseInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PluginReleaseResource): PluginReleaseInstance {
    return new PluginReleaseInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
