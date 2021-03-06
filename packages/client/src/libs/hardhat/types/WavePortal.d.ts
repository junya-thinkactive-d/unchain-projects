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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface WavePortalInterface extends ethers.utils.Interface {
  functions: {
    "MAX_PER_MINT()": FunctionFragment;
    "PRICE()": FunctionFragment;
    "getAllWaves()": FunctionFragment;
    "getTotalWaves()": FunctionFragment;
    "lastWavedAt(address)": FunctionFragment;
    "mintWave(string,string,uint256)": FunctionFragment;
    "wave(string,string,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_PER_MINT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRICE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllWaves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalWaves",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lastWavedAt", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mintWave",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wave",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_PER_MINT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRICE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllWaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalWaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastWavedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintWave", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wave", data: BytesLike): Result;

  events: {
    "NewWave(address,uint256,string,string,uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewWave"): EventFragment;
}

export type NewWaveEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber, boolean] & {
    from: string;
    timestamp: BigNumber;
    name: string;
    message: string;
    wavecount: BigNumber;
    winOrLose: boolean;
  }
>;

export class WavePortal extends BaseContract {
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

  interface: WavePortalInterface;

  functions: {
    MAX_PER_MINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    PRICE(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAllWaves(
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, BigNumber, string, string, BigNumber, boolean] & {
          waver: string;
          timestamp: BigNumber;
          name: string;
          message: string;
          wavecount: BigNumber;
          winOrLose: boolean;
        })[]
      ]
    >;

    getTotalWaves(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastWavedAt(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    mintWave(
      _name: string,
      _message: string,
      _wavecount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wave(
      _name: string,
      _message: string,
      _wavecount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  MAX_PER_MINT(overrides?: CallOverrides): Promise<BigNumber>;

  PRICE(overrides?: CallOverrides): Promise<BigNumber>;

  getAllWaves(
    overrides?: CallOverrides
  ): Promise<
    ([string, BigNumber, string, string, BigNumber, boolean] & {
      waver: string;
      timestamp: BigNumber;
      name: string;
      message: string;
      wavecount: BigNumber;
      winOrLose: boolean;
    })[]
  >;

  getTotalWaves(overrides?: CallOverrides): Promise<BigNumber>;

  lastWavedAt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  mintWave(
    _name: string,
    _message: string,
    _wavecount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wave(
    _name: string,
    _message: string,
    _wavecount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_PER_MINT(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE(overrides?: CallOverrides): Promise<BigNumber>;

    getAllWaves(
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber, string, string, BigNumber, boolean] & {
        waver: string;
        timestamp: BigNumber;
        name: string;
        message: string;
        wavecount: BigNumber;
        winOrLose: boolean;
      })[]
    >;

    getTotalWaves(overrides?: CallOverrides): Promise<BigNumber>;

    lastWavedAt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    mintWave(
      _name: string,
      _message: string,
      _wavecount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    wave(
      _name: string,
      _message: string,
      _wavecount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewWave(address,uint256,string,string,uint256,bool)"(
      from?: string | null,
      timestamp?: null,
      name?: null,
      message?: null,
      wavecount?: null,
      winOrLose?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber, boolean],
      {
        from: string;
        timestamp: BigNumber;
        name: string;
        message: string;
        wavecount: BigNumber;
        winOrLose: boolean;
      }
    >;

    NewWave(
      from?: string | null,
      timestamp?: null,
      name?: null,
      message?: null,
      wavecount?: null,
      winOrLose?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber, boolean],
      {
        from: string;
        timestamp: BigNumber;
        name: string;
        message: string;
        wavecount: BigNumber;
        winOrLose: boolean;
      }
    >;
  };

  estimateGas: {
    MAX_PER_MINT(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE(overrides?: CallOverrides): Promise<BigNumber>;

    getAllWaves(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalWaves(overrides?: CallOverrides): Promise<BigNumber>;

    lastWavedAt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    mintWave(
      _name: string,
      _message: string,
      _wavecount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wave(
      _name: string,
      _message: string,
      _wavecount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_PER_MINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllWaves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalWaves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastWavedAt(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintWave(
      _name: string,
      _message: string,
      _wavecount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wave(
      _name: string,
      _message: string,
      _wavecount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
