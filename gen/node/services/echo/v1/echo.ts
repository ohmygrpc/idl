/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "services.echo.v1";

export interface HealthCheckRequest {}

export interface HealthCheckResponse {}

export interface EchoRequest {
  msg: string;
}

export interface EchoResponse {
  msg: string;
}

const baseHealthCheckRequest: object = {};

export const HealthCheckRequest = {
  encode(
    _: HealthCheckRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHealthCheckRequest } as HealthCheckRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): HealthCheckRequest {
    const message = { ...baseHealthCheckRequest } as HealthCheckRequest;
    return message;
  },

  toJSON(_: HealthCheckRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<HealthCheckRequest>): HealthCheckRequest {
    const message = { ...baseHealthCheckRequest } as HealthCheckRequest;
    return message;
  },
};

const baseHealthCheckResponse: object = {};

export const HealthCheckResponse = {
  encode(
    _: HealthCheckResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHealthCheckResponse } as HealthCheckResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): HealthCheckResponse {
    const message = { ...baseHealthCheckResponse } as HealthCheckResponse;
    return message;
  },

  toJSON(_: HealthCheckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<HealthCheckResponse>): HealthCheckResponse {
    const message = { ...baseHealthCheckResponse } as HealthCheckResponse;
    return message;
  },
};

const baseEchoRequest: object = { msg: "" };

export const EchoRequest = {
  encode(
    message: EchoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEchoRequest } as EchoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EchoRequest {
    const message = { ...baseEchoRequest } as EchoRequest;
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: EchoRequest): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(object: DeepPartial<EchoRequest>): EchoRequest {
    const message = { ...baseEchoRequest } as EchoRequest;
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseEchoResponse: object = { msg: "" };

export const EchoResponse = {
  encode(
    message: EchoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEchoResponse } as EchoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EchoResponse {
    const message = { ...baseEchoResponse } as EchoResponse;
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: EchoResponse): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(object: DeepPartial<EchoResponse>): EchoResponse {
    const message = { ...baseEchoResponse } as EchoResponse;
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

export const EchoServiceService = {
  healthCheck: {
    path: "/services.echo.v1.EchoService/HealthCheck",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HealthCheckRequest) =>
      Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HealthCheckRequest.decode(value),
    responseSerialize: (value: HealthCheckResponse) =>
      Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HealthCheckResponse.decode(value),
  },
  echo: {
    path: "/services.echo.v1.EchoService/Echo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EchoRequest) =>
      Buffer.from(EchoRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EchoRequest.decode(value),
    responseSerialize: (value: EchoResponse) =>
      Buffer.from(EchoResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EchoResponse.decode(value),
  },
} as const;

export interface EchoServiceServer extends UntypedServiceImplementation {
  healthCheck: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
  echo: handleUnaryCall<EchoRequest, EchoResponse>;
}

export interface EchoServiceClient extends Client {
  healthCheck(
    request: HealthCheckRequest,
    callback: (
      error: ServiceError | null,
      response: HealthCheckResponse
    ) => void
  ): ClientUnaryCall;
  healthCheck(
    request: HealthCheckRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: HealthCheckResponse
    ) => void
  ): ClientUnaryCall;
  healthCheck(
    request: HealthCheckRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: HealthCheckResponse
    ) => void
  ): ClientUnaryCall;
  echo(
    request: EchoRequest,
    callback: (error: ServiceError | null, response: EchoResponse) => void
  ): ClientUnaryCall;
  echo(
    request: EchoRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EchoResponse) => void
  ): ClientUnaryCall;
  echo(
    request: EchoRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EchoResponse) => void
  ): ClientUnaryCall;
}

export const EchoServiceClient = makeGenericClientConstructor(
  EchoServiceService,
  "services.echo.v1.EchoService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): EchoServiceClient;
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
