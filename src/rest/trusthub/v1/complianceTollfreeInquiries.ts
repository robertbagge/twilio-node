/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
 * This is the public Twilio REST API.
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

export type ComplianceTollfreeInquiriesOptInType =
  | "VERBAL"
  | "WEB_FORM"
  | "PAPER_FORM"
  | "VIA_TEXT"
  | "MOBILE_QR_CODE";

/**
 * Options to pass to create a ComplianceTollfreeInquiriesInstance
 */
export interface ComplianceTollfreeInquiriesListInstanceCreateOptions {
  /** The Tollfree phone number to be verified */
  tollfreePhoneNumber: string;
  /** The email address to receive the notification about the verification result. */
  notificationEmail: string;
  /** The name of the business or organization using the Tollfree number. */
  businessName?: string;
  /** The website of the business or organization using the Tollfree number. */
  businessWebsite?: string;
  /** The category of the use case for the Tollfree Number. List as many are applicable.. */
  useCaseCategories?: Array<string>;
  /** Use this to further explain how messaging is used by the business or organization. */
  useCaseSummary?: string;
  /** An example of message content, i.e. a sample message. */
  productionMessageSample?: string;
  /** Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL. */
  optInImageUrls?: Array<string>;
  /**  */
  optInType?: ComplianceTollfreeInquiriesOptInType;
  /** Estimate monthly volume of messages from the Tollfree Number. */
  messageVolume?: string;
  /** The address of the business or organization using the Tollfree number. */
  businessStreetAddress?: string;
  /** The address of the business or organization using the Tollfree number. */
  businessStreetAddress2?: string;
  /** The city of the business or organization using the Tollfree number. */
  businessCity?: string;
  /** The state/province/region of the business or organization using the Tollfree number. */
  businessStateProvinceRegion?: string;
  /** The postal code of the business or organization using the Tollfree number. */
  businessPostalCode?: string;
  /** The country of the business or organization using the Tollfree number. */
  businessCountry?: string;
  /** Additional information to be provided for verification. */
  additionalInformation?: string;
  /** The first name of the contact for the business or organization using the Tollfree number. */
  businessContactFirstName?: string;
  /** The last name of the contact for the business or organization using the Tollfree number. */
  businessContactLastName?: string;
  /** The email address of the contact for the business or organization using the Tollfree number. */
  businessContactEmail?: string;
  /** The phone number of the contact for the business or organization using the Tollfree number. */
  businessContactPhone?: string;
}

export interface ComplianceTollfreeInquiriesSolution {}

export interface ComplianceTollfreeInquiriesListInstance {
  _version: V1;
  _solution: ComplianceTollfreeInquiriesSolution;
  _uri: string;

  /**
   * Create a ComplianceTollfreeInquiriesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ComplianceTollfreeInquiriesInstance
   */
  create(
    params: ComplianceTollfreeInquiriesListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: ComplianceTollfreeInquiriesInstance
    ) => any
  ): Promise<ComplianceTollfreeInquiriesInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ComplianceTollfreeInquiriesListInstance(
  version: V1
): ComplianceTollfreeInquiriesListInstance {
  const instance = {} as ComplianceTollfreeInquiriesListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/ComplianceInquiries/Tollfree/Initialize`;

  instance.create = function create(
    params: ComplianceTollfreeInquiriesListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: ComplianceTollfreeInquiriesInstance
    ) => any
  ): Promise<ComplianceTollfreeInquiriesInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["tollfreePhoneNumber"] === null ||
      params["tollfreePhoneNumber"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['tollfreePhoneNumber']\" missing."
      );
    }

    if (
      params["notificationEmail"] === null ||
      params["notificationEmail"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['notificationEmail']\" missing."
      );
    }

    let data: any = {};

    data["TollfreePhoneNumber"] = params["tollfreePhoneNumber"];

    data["NotificationEmail"] = params["notificationEmail"];
    if (params["businessName"] !== undefined)
      data["BusinessName"] = params["businessName"];
    if (params["businessWebsite"] !== undefined)
      data["BusinessWebsite"] = params["businessWebsite"];
    if (params["useCaseCategories"] !== undefined)
      data["UseCaseCategories"] = serialize.map(
        params["useCaseCategories"],
        (e: string) => e
      );
    if (params["useCaseSummary"] !== undefined)
      data["UseCaseSummary"] = params["useCaseSummary"];
    if (params["productionMessageSample"] !== undefined)
      data["ProductionMessageSample"] = params["productionMessageSample"];
    if (params["optInImageUrls"] !== undefined)
      data["OptInImageUrls"] = serialize.map(
        params["optInImageUrls"],
        (e: string) => e
      );
    if (params["optInType"] !== undefined)
      data["OptInType"] = params["optInType"];
    if (params["messageVolume"] !== undefined)
      data["MessageVolume"] = params["messageVolume"];
    if (params["businessStreetAddress"] !== undefined)
      data["BusinessStreetAddress"] = params["businessStreetAddress"];
    if (params["businessStreetAddress2"] !== undefined)
      data["BusinessStreetAddress2"] = params["businessStreetAddress2"];
    if (params["businessCity"] !== undefined)
      data["BusinessCity"] = params["businessCity"];
    if (params["businessStateProvinceRegion"] !== undefined)
      data["BusinessStateProvinceRegion"] =
        params["businessStateProvinceRegion"];
    if (params["businessPostalCode"] !== undefined)
      data["BusinessPostalCode"] = params["businessPostalCode"];
    if (params["businessCountry"] !== undefined)
      data["BusinessCountry"] = params["businessCountry"];
    if (params["additionalInformation"] !== undefined)
      data["AdditionalInformation"] = params["additionalInformation"];
    if (params["businessContactFirstName"] !== undefined)
      data["BusinessContactFirstName"] = params["businessContactFirstName"];
    if (params["businessContactLastName"] !== undefined)
      data["BusinessContactLastName"] = params["businessContactLastName"];
    if (params["businessContactEmail"] !== undefined)
      data["BusinessContactEmail"] = params["businessContactEmail"];
    if (params["businessContactPhone"] !== undefined)
      data["BusinessContactPhone"] = params["businessContactPhone"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ComplianceTollfreeInquiriesInstance(operationVersion, payload)
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

interface ComplianceTollfreeInquiriesPayload
  extends ComplianceTollfreeInquiriesResource {}

interface ComplianceTollfreeInquiriesResource {
  inquiry_id: string;
  inquiry_session_token: string;
  registration_id: string;
  url: string;
}

export class ComplianceTollfreeInquiriesInstance {
  constructor(
    protected _version: V1,
    payload: ComplianceTollfreeInquiriesResource
  ) {
    this.inquiryId = payload.inquiry_id;
    this.inquirySessionToken = payload.inquiry_session_token;
    this.registrationId = payload.registration_id;
    this.url = payload.url;
  }

  /**
   * The unique ID used to start an embedded compliance registration session.
   */
  inquiryId: string;
  /**
   * The session token used to start an embedded compliance registration session.
   */
  inquirySessionToken: string;
  /**
   * The TolfreeId matching the Tollfree Profile that should be resumed or resubmitted for editing.
   */
  registrationId: string;
  /**
   * The URL of this resource.
   */
  url: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      inquiryId: this.inquiryId,
      inquirySessionToken: this.inquirySessionToken,
      registrationId: this.registrationId,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
