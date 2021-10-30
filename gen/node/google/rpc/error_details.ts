/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "google.rpc";

/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 *
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 *
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retires have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfo {
  /** Clients should wait at least this long between retrying the same request. */
  retryDelay?: Duration;
}

/** Describes additional debugging info. */
export interface DebugInfo {
  /** The stack trace entries indicating where the error occurred. */
  stackEntries: string[];
  /** Additional debugging information provided by the server. */
  detail: string;
}

/**
 * Describes how a quota check failed.
 *
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 *
 * Also see RetryDetail and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailure {
  /** Describes all quota violations. */
  violations: QuotaFailure_Violation[];
}

/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_Violation {
  /**
   * The subject on which the quota check failed.
   * For example, "clientip:<ip address of client>" or "project:<Google
   * developer project id>".
   */
  subject: string;
  /**
   * A description of how the quota check failed. Clients can use this
   * description to find more about the quota configuration in the service's
   * public documentation, or find the relevant quota limit to adjust through
   * developer console.
   *
   * For example: "Service disabled" or "Daily Limit for read operations
   * exceeded".
   */
  description: string;
}

/**
 * Describes what preconditions have failed.
 *
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailure {
  /** Describes all precondition violations. */
  violations: PreconditionFailure_Violation[];
}

/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_Violation {
  /**
   * The type of PreconditionFailure. We recommend using a service-specific
   * enum type to define the supported precondition violation types. For
   * example, "TOS" for "Terms of Service violation".
   */
  type: string;
  /**
   * The subject, relative to the type, that failed.
   * For example, "google.com/cloud" relative to the "TOS" type would
   * indicate which terms of service is being referenced.
   */
  subject: string;
  /**
   * A description of how the precondition failed. Developers can use this
   * description to understand how to fix the failure.
   *
   * For example: "Terms of service not accepted".
   */
  description: string;
}

/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequest {
  /** Describes all violations in a client request. */
  fieldViolations: BadRequest_FieldViolation[];
}

/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolation {
  /**
   * A path leading to a field in the request body. The value will be a
   * sequence of dot-separated identifiers that identify a protocol buffer
   * field. E.g., "field_violations.field" would identify this field.
   */
  field: string;
  /** A description of why the request element is bad. */
  description: string;
}

/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfo {
  /**
   * An opaque string that should only be interpreted by the service generating
   * it. For example, it can be used to identify requests in the service's logs.
   */
  requestId: string;
  /**
   * Any data that was used to serve this request. For example, an encrypted
   * stack trace that can be sent back to the service provider for debugging.
   */
  servingData: string;
}

/** Describes the resource that is being accessed. */
export interface ResourceInfo {
  /**
   * A name for the type of resource being accessed, e.g. "sql table",
   * "cloud storage bucket", "file", "Google calendar"; or the type URL
   * of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic".
   */
  resourceType: string;
  /**
   * The name of the resource being accessed.  For example, a shared calendar
   * name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current
   * error is [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
   */
  resourceName: string;
  /**
   * The owner of the resource (optional).
   * For example, "user:<owner email>" or "project:<Google developer project
   * id>".
   */
  owner: string;
  /**
   * Describes what error is encountered when accessing this resource.
   * For example, updating a cloud project may require the `writer` permission
   * on the developer console project.
   */
  description: string;
}

/**
 * Provides links to documentation or for performing an out of band action.
 *
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface Help {
  /** URL(s) pointing to additional information on handling the current error. */
  links: Help_Link[];
}

/** Describes a URL link. */
export interface Help_Link {
  /** Describes what the link offers. */
  description: string;
  /** The URL of the link. */
  url: string;
}

/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessage {
  /**
   * The locale used following the specification defined at
   * http://www.rfc-editor.org/rfc/bcp/bcp47.txt.
   * Examples are: "en-US", "fr-CH", "es-MX"
   */
  locale: string;
  /** The localized error message in the above locale. */
  message: string;
}

const baseRetryInfo: object = {};

export const RetryInfo = {
  encode(
    message: RetryInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.retryDelay !== undefined) {
      Duration.encode(message.retryDelay, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetryInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetryInfo } as RetryInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retryDelay = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetryInfo {
    const message = { ...baseRetryInfo } as RetryInfo;
    if (object.retryDelay !== undefined && object.retryDelay !== null) {
      message.retryDelay = Duration.fromJSON(object.retryDelay);
    } else {
      message.retryDelay = undefined;
    }
    return message;
  },

  toJSON(message: RetryInfo): unknown {
    const obj: any = {};
    message.retryDelay !== undefined &&
      (obj.retryDelay = message.retryDelay
        ? Duration.toJSON(message.retryDelay)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RetryInfo>): RetryInfo {
    const message = { ...baseRetryInfo } as RetryInfo;
    if (object.retryDelay !== undefined && object.retryDelay !== null) {
      message.retryDelay = Duration.fromPartial(object.retryDelay);
    } else {
      message.retryDelay = undefined;
    }
    return message;
  },
};

const baseDebugInfo: object = { stackEntries: "", detail: "" };

export const DebugInfo = {
  encode(
    message: DebugInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stackEntries) {
      writer.uint32(10).string(v!);
    }
    if (message.detail !== "") {
      writer.uint32(18).string(message.detail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDebugInfo } as DebugInfo;
    message.stackEntries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stackEntries.push(reader.string());
          break;
        case 2:
          message.detail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugInfo {
    const message = { ...baseDebugInfo } as DebugInfo;
    message.stackEntries = [];
    if (object.stackEntries !== undefined && object.stackEntries !== null) {
      for (const e of object.stackEntries) {
        message.stackEntries.push(String(e));
      }
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = String(object.detail);
    } else {
      message.detail = "";
    }
    return message;
  },

  toJSON(message: DebugInfo): unknown {
    const obj: any = {};
    if (message.stackEntries) {
      obj.stackEntries = message.stackEntries.map((e) => e);
    } else {
      obj.stackEntries = [];
    }
    message.detail !== undefined && (obj.detail = message.detail);
    return obj;
  },

  fromPartial(object: DeepPartial<DebugInfo>): DebugInfo {
    const message = { ...baseDebugInfo } as DebugInfo;
    message.stackEntries = [];
    if (object.stackEntries !== undefined && object.stackEntries !== null) {
      for (const e of object.stackEntries) {
        message.stackEntries.push(e);
      }
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    } else {
      message.detail = "";
    }
    return message;
  },
};

const baseQuotaFailure: object = {};

export const QuotaFailure = {
  encode(
    message: QuotaFailure,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.violations) {
      QuotaFailure_Violation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuotaFailure } as QuotaFailure;
    message.violations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.violations.push(
            QuotaFailure_Violation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuotaFailure {
    const message = { ...baseQuotaFailure } as QuotaFailure;
    message.violations = [];
    if (object.violations !== undefined && object.violations !== null) {
      for (const e of object.violations) {
        message.violations.push(QuotaFailure_Violation.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QuotaFailure): unknown {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map((e) =>
        e ? QuotaFailure_Violation.toJSON(e) : undefined
      );
    } else {
      obj.violations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QuotaFailure>): QuotaFailure {
    const message = { ...baseQuotaFailure } as QuotaFailure;
    message.violations = [];
    if (object.violations !== undefined && object.violations !== null) {
      for (const e of object.violations) {
        message.violations.push(QuotaFailure_Violation.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQuotaFailure_Violation: object = { subject: "", description: "" };

export const QuotaFailure_Violation = {
  encode(
    message: QuotaFailure_Violation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subject !== "") {
      writer.uint32(10).string(message.subject);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuotaFailure_Violation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuotaFailure_Violation } as QuotaFailure_Violation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuotaFailure_Violation {
    const message = { ...baseQuotaFailure_Violation } as QuotaFailure_Violation;
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: QuotaFailure_Violation): unknown {
    const obj: any = {};
    message.subject !== undefined && (obj.subject = message.subject);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuotaFailure_Violation>
  ): QuotaFailure_Violation {
    const message = { ...baseQuotaFailure_Violation } as QuotaFailure_Violation;
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const basePreconditionFailure: object = {};

export const PreconditionFailure = {
  encode(
    message: PreconditionFailure,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.violations) {
      PreconditionFailure_Violation.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreconditionFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePreconditionFailure } as PreconditionFailure;
    message.violations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.violations.push(
            PreconditionFailure_Violation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PreconditionFailure {
    const message = { ...basePreconditionFailure } as PreconditionFailure;
    message.violations = [];
    if (object.violations !== undefined && object.violations !== null) {
      for (const e of object.violations) {
        message.violations.push(PreconditionFailure_Violation.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: PreconditionFailure): unknown {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map((e) =>
        e ? PreconditionFailure_Violation.toJSON(e) : undefined
      );
    } else {
      obj.violations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PreconditionFailure>): PreconditionFailure {
    const message = { ...basePreconditionFailure } as PreconditionFailure;
    message.violations = [];
    if (object.violations !== undefined && object.violations !== null) {
      for (const e of object.violations) {
        message.violations.push(PreconditionFailure_Violation.fromPartial(e));
      }
    }
    return message;
  },
};

const basePreconditionFailure_Violation: object = {
  type: "",
  subject: "",
  description: "",
};

export const PreconditionFailure_Violation = {
  encode(
    message: PreconditionFailure_Violation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PreconditionFailure_Violation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePreconditionFailure_Violation,
    } as PreconditionFailure_Violation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.subject = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PreconditionFailure_Violation {
    const message = {
      ...basePreconditionFailure_Violation,
    } as PreconditionFailure_Violation;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: PreconditionFailure_Violation): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.subject !== undefined && (obj.subject = message.subject);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PreconditionFailure_Violation>
  ): PreconditionFailure_Violation {
    const message = {
      ...basePreconditionFailure_Violation,
    } as PreconditionFailure_Violation;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseBadRequest: object = {};

export const BadRequest = {
  encode(
    message: BadRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fieldViolations) {
      BadRequest_FieldViolation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBadRequest } as BadRequest;
    message.fieldViolations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldViolations.push(
            BadRequest_FieldViolation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BadRequest {
    const message = { ...baseBadRequest } as BadRequest;
    message.fieldViolations = [];
    if (
      object.fieldViolations !== undefined &&
      object.fieldViolations !== null
    ) {
      for (const e of object.fieldViolations) {
        message.fieldViolations.push(BadRequest_FieldViolation.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BadRequest): unknown {
    const obj: any = {};
    if (message.fieldViolations) {
      obj.fieldViolations = message.fieldViolations.map((e) =>
        e ? BadRequest_FieldViolation.toJSON(e) : undefined
      );
    } else {
      obj.fieldViolations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BadRequest>): BadRequest {
    const message = { ...baseBadRequest } as BadRequest;
    message.fieldViolations = [];
    if (
      object.fieldViolations !== undefined &&
      object.fieldViolations !== null
    ) {
      for (const e of object.fieldViolations) {
        message.fieldViolations.push(BadRequest_FieldViolation.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBadRequest_FieldViolation: object = { field: "", description: "" };

export const BadRequest_FieldViolation = {
  encode(
    message: BadRequest_FieldViolation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BadRequest_FieldViolation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBadRequest_FieldViolation,
    } as BadRequest_FieldViolation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BadRequest_FieldViolation {
    const message = {
      ...baseBadRequest_FieldViolation,
    } as BadRequest_FieldViolation;
    if (object.field !== undefined && object.field !== null) {
      message.field = String(object.field);
    } else {
      message.field = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: BadRequest_FieldViolation): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BadRequest_FieldViolation>
  ): BadRequest_FieldViolation {
    const message = {
      ...baseBadRequest_FieldViolation,
    } as BadRequest_FieldViolation;
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    } else {
      message.field = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseRequestInfo: object = { requestId: "", servingData: "" };

export const RequestInfo = {
  encode(
    message: RequestInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.servingData !== "") {
      writer.uint32(18).string(message.servingData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestInfo } as RequestInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.servingData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestInfo {
    const message = { ...baseRequestInfo } as RequestInfo;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.servingData !== undefined && object.servingData !== null) {
      message.servingData = String(object.servingData);
    } else {
      message.servingData = "";
    }
    return message;
  },

  toJSON(message: RequestInfo): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.servingData !== undefined &&
      (obj.servingData = message.servingData);
    return obj;
  },

  fromPartial(object: DeepPartial<RequestInfo>): RequestInfo {
    const message = { ...baseRequestInfo } as RequestInfo;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.servingData !== undefined && object.servingData !== null) {
      message.servingData = object.servingData;
    } else {
      message.servingData = "";
    }
    return message;
  },
};

const baseResourceInfo: object = {
  resourceType: "",
  resourceName: "",
  owner: "",
  description: "",
};

export const ResourceInfo = {
  encode(
    message: ResourceInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourceType !== "") {
      writer.uint32(10).string(message.resourceType);
    }
    if (message.resourceName !== "") {
      writer.uint32(18).string(message.resourceName);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResourceInfo } as ResourceInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceType = reader.string();
          break;
        case 2:
          message.resourceName = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceInfo {
    const message = { ...baseResourceInfo } as ResourceInfo;
    if (object.resourceType !== undefined && object.resourceType !== null) {
      message.resourceType = String(object.resourceType);
    } else {
      message.resourceType = "";
    }
    if (object.resourceName !== undefined && object.resourceName !== null) {
      message.resourceName = String(object.resourceName);
    } else {
      message.resourceName = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: ResourceInfo): unknown {
    const obj: any = {};
    message.resourceType !== undefined &&
      (obj.resourceType = message.resourceType);
    message.resourceName !== undefined &&
      (obj.resourceName = message.resourceName);
    message.owner !== undefined && (obj.owner = message.owner);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<ResourceInfo>): ResourceInfo {
    const message = { ...baseResourceInfo } as ResourceInfo;
    if (object.resourceType !== undefined && object.resourceType !== null) {
      message.resourceType = object.resourceType;
    } else {
      message.resourceType = "";
    }
    if (object.resourceName !== undefined && object.resourceName !== null) {
      message.resourceName = object.resourceName;
    } else {
      message.resourceName = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseHelp: object = {};

export const Help = {
  encode(message: Help, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.links) {
      Help_Link.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Help {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHelp } as Help;
    message.links = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.links.push(Help_Link.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Help {
    const message = { ...baseHelp } as Help;
    message.links = [];
    if (object.links !== undefined && object.links !== null) {
      for (const e of object.links) {
        message.links.push(Help_Link.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Help): unknown {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? Help_Link.toJSON(e) : undefined
      );
    } else {
      obj.links = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Help>): Help {
    const message = { ...baseHelp } as Help;
    message.links = [];
    if (object.links !== undefined && object.links !== null) {
      for (const e of object.links) {
        message.links.push(Help_Link.fromPartial(e));
      }
    }
    return message;
  },
};

const baseHelp_Link: object = { description: "", url: "" };

export const Help_Link = {
  encode(
    message: Help_Link,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Help_Link {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHelp_Link } as Help_Link;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Help_Link {
    const message = { ...baseHelp_Link } as Help_Link;
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    return message;
  },

  toJSON(message: Help_Link): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(object: DeepPartial<Help_Link>): Help_Link {
    const message = { ...baseHelp_Link } as Help_Link;
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    return message;
  },
};

const baseLocalizedMessage: object = { locale: "", message: "" };

export const LocalizedMessage = {
  encode(
    message: LocalizedMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.locale !== "") {
      writer.uint32(10).string(message.locale);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalizedMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocalizedMessage } as LocalizedMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locale = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocalizedMessage {
    const message = { ...baseLocalizedMessage } as LocalizedMessage;
    if (object.locale !== undefined && object.locale !== null) {
      message.locale = String(object.locale);
    } else {
      message.locale = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: LocalizedMessage): unknown {
    const obj: any = {};
    message.locale !== undefined && (obj.locale = message.locale);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<LocalizedMessage>): LocalizedMessage {
    const message = { ...baseLocalizedMessage } as LocalizedMessage;
    if (object.locale !== undefined && object.locale !== null) {
      message.locale = object.locale;
    } else {
      message.locale = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
