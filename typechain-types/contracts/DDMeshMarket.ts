/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace DDMeshMarket {
  export type AgreementStruct = {
    id: BigNumberish;
    user: AddressLike;
    userBalance: BigNumberish;
    providerAddress: AddressLike;
    providerId: BigNumberish;
    providerClaimed: BigNumberish;
    encConnectionString: string;
    startTimeStamp: BigNumberish;
    providerRewardsWithdrawLastTimeStamp: BigNumberish;
    status: BigNumberish;
  };

  export type AgreementStructOutput = [
    id: bigint,
    user: string,
    userBalance: bigint,
    providerAddress: string,
    providerId: bigint,
    providerClaimed: bigint,
    encConnectionString: string,
    startTimeStamp: bigint,
    providerRewardsWithdrawLastTimeStamp: bigint,
    status: bigint
  ] & {
    id: bigint;
    user: string;
    userBalance: bigint;
    providerAddress: string;
    providerId: bigint;
    providerClaimed: bigint;
    encConnectionString: string;
    startTimeStamp: bigint;
    providerRewardsWithdrawLastTimeStamp: bigint;
    status: bigint;
  };

  export type ProviderStruct = {
    id: BigNumberish;
    pAddress: AddressLike;
    fee: BigNumberish;
    encApiKey: string;
    ensName: string;
    description: string;
    noOfDbAgreements: BigNumberish;
    activeAgreements: BigNumberish;
  };

  export type ProviderStructOutput = [
    id: bigint,
    pAddress: string,
    fee: bigint,
    encApiKey: string,
    ensName: string,
    description: string,
    noOfDbAgreements: bigint,
    activeAgreements: bigint
  ] & {
    id: bigint;
    pAddress: string;
    fee: bigint;
    encApiKey: string;
    ensName: string;
    description: string;
    noOfDbAgreements: bigint;
    activeAgreements: bigint;
  };
}

export interface DDMeshMarketInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "addressToProvider"
      | "agreementIdToAgreement"
      | "agreementIdTotalCount"
      | "agreements"
      | "closeAgreementByProvider"
      | "closeAgreementByUser"
      | "enterAgreement"
      | "getAgreement"
      | "getAllAgreements"
      | "getAllProviders"
      | "getBalanceAvailable"
      | "getProviderAgreements"
      | "getProviderByAddress"
      | "getProviderByProviderId"
      | "getProviderIdToAgreements"
      | "getProviderTVLs"
      | "getRewardAvailable"
      | "getRoleAdmin"
      | "getUserAgreements"
      | "grantRole"
      | "hasRole"
      | "owner"
      | "providerAgreements"
      | "providerIdToAgreements"
      | "providerIdToProvider"
      | "providerIdToTVLAcrossAllAgreements"
      | "providerIdTotalCount"
      | "providerToTVLAcrossAllAgreements"
      | "providers"
      | "registerProvider"
      | "renounceOwnership"
      | "renounceRole"
      | "revokeRole"
      | "setConnectionStringAndActivateAgreement"
      | "supportsInterface"
      | "token"
      | "transferOwnership"
      | "userAgreements"
      | "withdrawReward"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AgreementActivated"
      | "AgreementClosed"
      | "AgreementCreated"
      | "OwnershipTransferred"
      | "ProviderRegistered"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "WithdrawReward"
      | "WithdrawUserBalance"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addressToProvider",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "agreementIdToAgreement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "agreementIdTotalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "agreements",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeAgreementByProvider",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeAgreementByUser",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "enterAgreement",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAgreement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllAgreements",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllProviders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalanceAvailable",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderAgreements",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderByAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderByProviderId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderIdToAgreements",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviderTVLs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardAvailable",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAgreements",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "providerAgreements",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "providerIdToAgreements",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "providerIdToProvider",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "providerIdToTVLAcrossAllAgreements",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "providerIdTotalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "providerToTVLAcrossAllAgreements",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "providers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerProvider",
    values: [BigNumberish, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setConnectionStringAndActivateAgreement",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userAgreements",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawReward",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressToProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "agreementIdToAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "agreementIdTotalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "agreements", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeAgreementByProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeAgreementByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enterAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllProviders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalanceAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderByProviderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderIdToAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviderTVLs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "providerAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "providerIdToAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "providerIdToProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "providerIdToTVLAcrossAllAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "providerIdTotalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "providerToTVLAcrossAllAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "providers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setConnectionStringAndActivateAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawReward",
    data: BytesLike
  ): Result;
}

export namespace AgreementActivatedEvent {
  export type InputTuple = [
    agreementId: BigNumberish,
    userAddress: AddressLike,
    providerAddress: AddressLike,
    providerId: BigNumberish,
    encApiKey: string,
    encConnectionString: string
  ];
  export type OutputTuple = [
    agreementId: bigint,
    userAddress: string,
    providerAddress: string,
    providerId: bigint,
    encApiKey: string,
    encConnectionString: string
  ];
  export interface OutputObject {
    agreementId: bigint;
    userAddress: string;
    providerAddress: string;
    providerId: bigint;
    encApiKey: string;
    encConnectionString: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AgreementClosedEvent {
  export type InputTuple = [
    agreementId: BigNumberish,
    userAddress: AddressLike,
    providerAddress: AddressLike,
    providerId: BigNumberish,
    encApiKey: string,
    encConnectionString: string
  ];
  export type OutputTuple = [
    agreementId: bigint,
    userAddress: string,
    providerAddress: string,
    providerId: bigint,
    encApiKey: string,
    encConnectionString: string
  ];
  export interface OutputObject {
    agreementId: bigint;
    userAddress: string;
    providerAddress: string;
    providerId: bigint;
    encApiKey: string;
    encConnectionString: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AgreementCreatedEvent {
  export type InputTuple = [
    agreementId: BigNumberish,
    userAddress: AddressLike,
    providerAddress: AddressLike,
    providerId: BigNumberish,
    encApiKey: string,
    encConnectionString: string
  ];
  export type OutputTuple = [
    agreementId: bigint,
    userAddress: string,
    providerAddress: string,
    providerId: bigint,
    encApiKey: string,
    encConnectionString: string
  ];
  export interface OutputObject {
    agreementId: bigint;
    userAddress: string;
    providerAddress: string;
    providerId: bigint;
    encApiKey: string;
    encConnectionString: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProviderRegisteredEvent {
  export type InputTuple = [
    id: BigNumberish,
    provider: AddressLike,
    fee: BigNumberish,
    encApiKey: string,
    ensName: string
  ];
  export type OutputTuple = [
    id: bigint,
    provider: string,
    fee: bigint,
    encApiKey: string,
    ensName: string
  ];
  export interface OutputObject {
    id: bigint;
    provider: string;
    fee: bigint;
    encApiKey: string;
    ensName: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawRewardEvent {
  export type InputTuple = [
    agreementId: BigNumberish,
    amount: BigNumberish,
    provider: AddressLike
  ];
  export type OutputTuple = [
    agreementId: bigint,
    amount: bigint,
    provider: string
  ];
  export interface OutputObject {
    agreementId: bigint;
    amount: bigint;
    provider: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawUserBalanceEvent {
  export type InputTuple = [
    agreementId: BigNumberish,
    amount: BigNumberish,
    user: AddressLike
  ];
  export type OutputTuple = [agreementId: bigint, amount: bigint, user: string];
  export interface OutputObject {
    agreementId: bigint;
    amount: bigint;
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DDMeshMarket extends BaseContract {
  connect(runner?: ContractRunner | null): DDMeshMarket;
  waitForDeployment(): Promise<this>;

  interface: DDMeshMarketInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  addressToProvider: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, string, bigint, string, string, string, bigint, bigint] & {
        id: bigint;
        pAddress: string;
        fee: bigint;
        encApiKey: string;
        ensName: string;
        description: string;
        noOfDbAgreements: bigint;
        activeAgreements: bigint;
      }
    ],
    "view"
  >;

  agreementIdToAgreement: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        bigint,
        string,
        bigint,
        string,
        bigint,
        bigint,
        string,
        bigint,
        bigint,
        bigint
      ] & {
        id: bigint;
        user: string;
        userBalance: bigint;
        providerAddress: string;
        providerId: bigint;
        providerClaimed: bigint;
        encConnectionString: string;
        startTimeStamp: bigint;
        providerRewardsWithdrawLastTimeStamp: bigint;
        status: bigint;
      }
    ],
    "view"
  >;

  agreementIdTotalCount: TypedContractMethod<[], [bigint], "view">;

  agreements: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  closeAgreementByProvider: TypedContractMethod<
    [_agreementId: BigNumberish],
    [void],
    "nonpayable"
  >;

  closeAgreementByUser: TypedContractMethod<
    [_agreementId: BigNumberish],
    [void],
    "nonpayable"
  >;

  enterAgreement: TypedContractMethod<
    [_providerId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getAgreement: TypedContractMethod<
    [_agreementId: BigNumberish],
    [DDMeshMarket.AgreementStructOutput],
    "view"
  >;

  getAllAgreements: TypedContractMethod<[], [bigint[]], "view">;

  getAllProviders: TypedContractMethod<
    [],
    [DDMeshMarket.ProviderStructOutput[]],
    "view"
  >;

  getBalanceAvailable: TypedContractMethod<
    [_agreementId: BigNumberish],
    [bigint],
    "view"
  >;

  getProviderAgreements: TypedContractMethod<
    [_providerAddress: AddressLike],
    [bigint[]],
    "view"
  >;

  getProviderByAddress: TypedContractMethod<
    [_providerAddress: AddressLike],
    [DDMeshMarket.ProviderStructOutput],
    "view"
  >;

  getProviderByProviderId: TypedContractMethod<
    [_providerId: BigNumberish],
    [DDMeshMarket.ProviderStructOutput],
    "view"
  >;

  getProviderIdToAgreements: TypedContractMethod<
    [_providerId: BigNumberish],
    [bigint[]],
    "view"
  >;

  getProviderTVLs: TypedContractMethod<
    [],
    [[bigint[], string[], bigint[]]],
    "view"
  >;

  getRewardAvailable: TypedContractMethod<
    [_agreementId: BigNumberish],
    [bigint],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getUserAgreements: TypedContractMethod<
    [_userAddress: AddressLike],
    [DDMeshMarket.AgreementStructOutput[]],
    "view"
  >;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  providerAgreements: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  providerIdToAgreements: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  providerIdToProvider: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, string, string, string, bigint, bigint] & {
        id: bigint;
        pAddress: string;
        fee: bigint;
        encApiKey: string;
        ensName: string;
        description: string;
        noOfDbAgreements: bigint;
        activeAgreements: bigint;
      }
    ],
    "view"
  >;

  providerIdToTVLAcrossAllAgreements: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  providerIdTotalCount: TypedContractMethod<[], [bigint], "view">;

  providerToTVLAcrossAllAgreements: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  providers: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, string, string, string, bigint, bigint] & {
        id: bigint;
        pAddress: string;
        fee: bigint;
        encApiKey: string;
        ensName: string;
        description: string;
        noOfDbAgreements: bigint;
        activeAgreements: bigint;
      }
    ],
    "view"
  >;

  registerProvider: TypedContractMethod<
    [
      _fee: BigNumberish,
      _enc_apiKey: string,
      _ensName: string,
      _description: string,
      _noOfDbAgreements: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setConnectionStringAndActivateAgreement: TypedContractMethod<
    [_agreementId: BigNumberish, _encConnectionString: string],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  token: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  userAgreements: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  withdrawReward: TypedContractMethod<
    [_agreementId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addressToProvider"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, string, bigint, string, string, string, bigint, bigint] & {
        id: bigint;
        pAddress: string;
        fee: bigint;
        encApiKey: string;
        ensName: string;
        description: string;
        noOfDbAgreements: bigint;
        activeAgreements: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "agreementIdToAgreement"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        bigint,
        string,
        bigint,
        string,
        bigint,
        bigint,
        string,
        bigint,
        bigint,
        bigint
      ] & {
        id: bigint;
        user: string;
        userBalance: bigint;
        providerAddress: string;
        providerId: bigint;
        providerClaimed: bigint;
        encConnectionString: string;
        startTimeStamp: bigint;
        providerRewardsWithdrawLastTimeStamp: bigint;
        status: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "agreementIdTotalCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "agreements"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "closeAgreementByProvider"
  ): TypedContractMethod<[_agreementId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "closeAgreementByUser"
  ): TypedContractMethod<[_agreementId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "enterAgreement"
  ): TypedContractMethod<
    [_providerId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAgreement"
  ): TypedContractMethod<
    [_agreementId: BigNumberish],
    [DDMeshMarket.AgreementStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAllAgreements"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getAllProviders"
  ): TypedContractMethod<[], [DDMeshMarket.ProviderStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getBalanceAvailable"
  ): TypedContractMethod<[_agreementId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getProviderAgreements"
  ): TypedContractMethod<[_providerAddress: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getProviderByAddress"
  ): TypedContractMethod<
    [_providerAddress: AddressLike],
    [DDMeshMarket.ProviderStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getProviderByProviderId"
  ): TypedContractMethod<
    [_providerId: BigNumberish],
    [DDMeshMarket.ProviderStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getProviderIdToAgreements"
  ): TypedContractMethod<[_providerId: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getProviderTVLs"
  ): TypedContractMethod<[], [[bigint[], string[], bigint[]]], "view">;
  getFunction(
    nameOrSignature: "getRewardAvailable"
  ): TypedContractMethod<[_agreementId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getUserAgreements"
  ): TypedContractMethod<
    [_userAddress: AddressLike],
    [DDMeshMarket.AgreementStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "providerAgreements"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "providerIdToAgreements"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "providerIdToProvider"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, string, string, string, bigint, bigint] & {
        id: bigint;
        pAddress: string;
        fee: bigint;
        encApiKey: string;
        ensName: string;
        description: string;
        noOfDbAgreements: bigint;
        activeAgreements: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "providerIdToTVLAcrossAllAgreements"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "providerIdTotalCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "providerToTVLAcrossAllAgreements"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "providers"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, string, string, string, bigint, bigint] & {
        id: bigint;
        pAddress: string;
        fee: bigint;
        encApiKey: string;
        ensName: string;
        description: string;
        noOfDbAgreements: bigint;
        activeAgreements: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "registerProvider"
  ): TypedContractMethod<
    [
      _fee: BigNumberish,
      _enc_apiKey: string,
      _ensName: string,
      _description: string,
      _noOfDbAgreements: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setConnectionStringAndActivateAgreement"
  ): TypedContractMethod<
    [_agreementId: BigNumberish, _encConnectionString: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "userAgreements"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdrawReward"
  ): TypedContractMethod<[_agreementId: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "AgreementActivated"
  ): TypedContractEvent<
    AgreementActivatedEvent.InputTuple,
    AgreementActivatedEvent.OutputTuple,
    AgreementActivatedEvent.OutputObject
  >;
  getEvent(
    key: "AgreementClosed"
  ): TypedContractEvent<
    AgreementClosedEvent.InputTuple,
    AgreementClosedEvent.OutputTuple,
    AgreementClosedEvent.OutputObject
  >;
  getEvent(
    key: "AgreementCreated"
  ): TypedContractEvent<
    AgreementCreatedEvent.InputTuple,
    AgreementCreatedEvent.OutputTuple,
    AgreementCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "ProviderRegistered"
  ): TypedContractEvent<
    ProviderRegisteredEvent.InputTuple,
    ProviderRegisteredEvent.OutputTuple,
    ProviderRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawReward"
  ): TypedContractEvent<
    WithdrawRewardEvent.InputTuple,
    WithdrawRewardEvent.OutputTuple,
    WithdrawRewardEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawUserBalance"
  ): TypedContractEvent<
    WithdrawUserBalanceEvent.InputTuple,
    WithdrawUserBalanceEvent.OutputTuple,
    WithdrawUserBalanceEvent.OutputObject
  >;

  filters: {
    "AgreementActivated(uint256,address,address,uint256,string,string)": TypedContractEvent<
      AgreementActivatedEvent.InputTuple,
      AgreementActivatedEvent.OutputTuple,
      AgreementActivatedEvent.OutputObject
    >;
    AgreementActivated: TypedContractEvent<
      AgreementActivatedEvent.InputTuple,
      AgreementActivatedEvent.OutputTuple,
      AgreementActivatedEvent.OutputObject
    >;

    "AgreementClosed(uint256,address,address,uint256,string,string)": TypedContractEvent<
      AgreementClosedEvent.InputTuple,
      AgreementClosedEvent.OutputTuple,
      AgreementClosedEvent.OutputObject
    >;
    AgreementClosed: TypedContractEvent<
      AgreementClosedEvent.InputTuple,
      AgreementClosedEvent.OutputTuple,
      AgreementClosedEvent.OutputObject
    >;

    "AgreementCreated(uint256,address,address,uint256,string,string)": TypedContractEvent<
      AgreementCreatedEvent.InputTuple,
      AgreementCreatedEvent.OutputTuple,
      AgreementCreatedEvent.OutputObject
    >;
    AgreementCreated: TypedContractEvent<
      AgreementCreatedEvent.InputTuple,
      AgreementCreatedEvent.OutputTuple,
      AgreementCreatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "ProviderRegistered(uint256,address,uint256,string,string)": TypedContractEvent<
      ProviderRegisteredEvent.InputTuple,
      ProviderRegisteredEvent.OutputTuple,
      ProviderRegisteredEvent.OutputObject
    >;
    ProviderRegistered: TypedContractEvent<
      ProviderRegisteredEvent.InputTuple,
      ProviderRegisteredEvent.OutputTuple,
      ProviderRegisteredEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "WithdrawReward(uint256,uint256,address)": TypedContractEvent<
      WithdrawRewardEvent.InputTuple,
      WithdrawRewardEvent.OutputTuple,
      WithdrawRewardEvent.OutputObject
    >;
    WithdrawReward: TypedContractEvent<
      WithdrawRewardEvent.InputTuple,
      WithdrawRewardEvent.OutputTuple,
      WithdrawRewardEvent.OutputObject
    >;

    "WithdrawUserBalance(uint256,uint256,address)": TypedContractEvent<
      WithdrawUserBalanceEvent.InputTuple,
      WithdrawUserBalanceEvent.OutputTuple,
      WithdrawUserBalanceEvent.OutputObject
    >;
    WithdrawUserBalance: TypedContractEvent<
      WithdrawUserBalanceEvent.InputTuple,
      WithdrawUserBalanceEvent.OutputTuple,
      WithdrawUserBalanceEvent.OutputObject
    >;
  };
}
