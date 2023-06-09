/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PaymentInterface extends ethers.utils.Interface {
  functions: {
    "initialize(address)": FunctionFragment;
    "pay(address,bytes32,tuple[],uint256,uint256,bytes)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [
      string,
      BytesLike,
      { resourceType: BigNumberish; values: BigNumberish[] }[],
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "Paid(address,bytes32,tuple[],uint256,uint256,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paid"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type PaidEvent = TypedEvent<
  [
    string,
    string,
    ([number, BigNumber[]] & { resourceType: number; values: BigNumber[] })[],
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    provider: string;
    account: string;
    payloads: ([number, BigNumber[]] & {
      resourceType: number;
      values: BigNumber[];
    })[];
    value: BigNumber;
    nonce: BigNumber;
    amount: BigNumber;
    signature: string;
  }
>;

export class Payment extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PaymentInterface;

  functions: {
    initialize(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pay(
      provider: string,
      account: BytesLike,
      payloads: { resourceType: BigNumberish; values: BigNumberish[] }[],
      nonce: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  initialize(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pay(
    provider: string,
    account: BytesLike,
    payloads: { resourceType: BigNumberish; values: BigNumberish[] }[],
    nonce: BigNumberish,
    amount: BigNumberish,
    signature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    initialize(_token: string, overrides?: CallOverrides): Promise<void>;

    pay(
      provider: string,
      account: BytesLike,
      payloads: { resourceType: BigNumberish; values: BigNumberish[] }[],
      nonce: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "Paid(address,bytes32,tuple[],uint256,uint256,uint256,bytes)"(
      provider?: null,
      account?: null,
      payloads?: null,
      value?: null,
      nonce?: null,
      amount?: null,
      signature?: null
    ): TypedEventFilter<
      [
        string,
        string,
        ([number, BigNumber[]] & {
          resourceType: number;
          values: BigNumber[];
        })[],
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ],
      {
        provider: string;
        account: string;
        payloads: ([number, BigNumber[]] & {
          resourceType: number;
          values: BigNumber[];
        })[];
        value: BigNumber;
        nonce: BigNumber;
        amount: BigNumber;
        signature: string;
      }
    >;

    Paid(
      provider?: null,
      account?: null,
      payloads?: null,
      value?: null,
      nonce?: null,
      amount?: null,
      signature?: null
    ): TypedEventFilter<
      [
        string,
        string,
        ([number, BigNumber[]] & {
          resourceType: number;
          values: BigNumber[];
        })[],
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ],
      {
        provider: string;
        account: string;
        payloads: ([number, BigNumber[]] & {
          resourceType: number;
          values: BigNumber[];
        })[];
        value: BigNumber;
        nonce: BigNumber;
        amount: BigNumber;
        signature: string;
      }
    >;
  };

  estimateGas: {
    initialize(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pay(
      provider: string,
      account: BytesLike,
      payloads: { resourceType: BigNumberish; values: BigNumberish[] }[],
      nonce: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pay(
      provider: string,
      account: BytesLike,
      payloads: { resourceType: BigNumberish; values: BigNumberish[] }[],
      nonce: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
