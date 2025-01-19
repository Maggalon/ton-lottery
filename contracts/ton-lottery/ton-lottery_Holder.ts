import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(8);
    let _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleStdAddress(source: StdAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(32);
    let _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleVarAddress(source: VarAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type BuyTickets = {
    $$type: 'BuyTickets';
    numberOfTickets: bigint;
}

export function storeBuyTickets(src: BuyTickets) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4242936982, 32);
        b_0.storeUint(src.numberOfTickets, 32);
    };
}

export function loadBuyTickets(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4242936982) { throw Error('Invalid prefix'); }
    let _numberOfTickets = sc_0.loadUintBig(32);
    return { $$type: 'BuyTickets' as const, numberOfTickets: _numberOfTickets };
}

function loadTupleBuyTickets(source: TupleReader) {
    let _numberOfTickets = source.readBigNumber();
    return { $$type: 'BuyTickets' as const, numberOfTickets: _numberOfTickets };
}

function loadGetterTupleBuyTickets(source: TupleReader) {
    let _numberOfTickets = source.readBigNumber();
    return { $$type: 'BuyTickets' as const, numberOfTickets: _numberOfTickets };
}

function storeTupleBuyTickets(source: BuyTickets) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.numberOfTickets);
    return builder.build();
}

function dictValueParserBuyTickets(): DictionaryValue<BuyTickets> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBuyTickets(src)).endCell());
        },
        parse: (src) => {
            return loadBuyTickets(src.loadRef().beginParse());
        }
    }
}

export type InternalSendAmount = {
    $$type: 'InternalSendAmount';
    addr: Address;
    amount: bigint;
}

export function storeInternalSendAmount(src: InternalSendAmount) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(275898799, 32);
        b_0.storeAddress(src.addr);
        b_0.storeCoins(src.amount);
    };
}

export function loadInternalSendAmount(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 275898799) { throw Error('Invalid prefix'); }
    let _addr = sc_0.loadAddress();
    let _amount = sc_0.loadCoins();
    return { $$type: 'InternalSendAmount' as const, addr: _addr, amount: _amount };
}

function loadTupleInternalSendAmount(source: TupleReader) {
    let _addr = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'InternalSendAmount' as const, addr: _addr, amount: _amount };
}

function loadGetterTupleInternalSendAmount(source: TupleReader) {
    let _addr = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'InternalSendAmount' as const, addr: _addr, amount: _amount };
}

function storeTupleInternalSendAmount(source: InternalSendAmount) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.addr);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserInternalSendAmount(): DictionaryValue<InternalSendAmount> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInternalSendAmount(src)).endCell());
        },
        parse: (src) => {
            return loadInternalSendAmount(src.loadRef().beginParse());
        }
    }
}

export type InternalAddAmount = {
    $$type: 'InternalAddAmount';
    amount: bigint;
}

export function storeInternalAddAmount(src: InternalAddAmount) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1624515671, 32);
        b_0.storeCoins(src.amount);
    };
}

export function loadInternalAddAmount(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1624515671) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    return { $$type: 'InternalAddAmount' as const, amount: _amount };
}

function loadTupleInternalAddAmount(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'InternalAddAmount' as const, amount: _amount };
}

function loadGetterTupleInternalAddAmount(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'InternalAddAmount' as const, amount: _amount };
}

function storeTupleInternalAddAmount(source: InternalAddAmount) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserInternalAddAmount(): DictionaryValue<InternalAddAmount> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInternalAddAmount(src)).endCell());
        },
        parse: (src) => {
            return loadInternalAddAmount(src.loadRef().beginParse());
        }
    }
}

export type InternalSetHolder = {
    $$type: 'InternalSetHolder';
    holder: Address;
}

export function storeInternalSetHolder(src: InternalSetHolder) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2452260007, 32);
        b_0.storeAddress(src.holder);
    };
}

export function loadInternalSetHolder(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2452260007) { throw Error('Invalid prefix'); }
    let _holder = sc_0.loadAddress();
    return { $$type: 'InternalSetHolder' as const, holder: _holder };
}

function loadTupleInternalSetHolder(source: TupleReader) {
    let _holder = source.readAddress();
    return { $$type: 'InternalSetHolder' as const, holder: _holder };
}

function loadGetterTupleInternalSetHolder(source: TupleReader) {
    let _holder = source.readAddress();
    return { $$type: 'InternalSetHolder' as const, holder: _holder };
}

function storeTupleInternalSetHolder(source: InternalSetHolder) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.holder);
    return builder.build();
}

function dictValueParserInternalSetHolder(): DictionaryValue<InternalSetHolder> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInternalSetHolder(src)).endCell());
        },
        parse: (src) => {
            return loadInternalSetHolder(src.loadRef().beginParse());
        }
    }
}

export type Holder$Data = {
    $$type: 'Holder$Data';
    parent: Address;
    addr: Address;
    amount: bigint;
}

export function storeHolder$Data(src: Holder$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.parent);
        b_0.storeAddress(src.addr);
        b_0.storeCoins(src.amount);
    };
}

export function loadHolder$Data(slice: Slice) {
    let sc_0 = slice;
    let _parent = sc_0.loadAddress();
    let _addr = sc_0.loadAddress();
    let _amount = sc_0.loadCoins();
    return { $$type: 'Holder$Data' as const, parent: _parent, addr: _addr, amount: _amount };
}

function loadTupleHolder$Data(source: TupleReader) {
    let _parent = source.readAddress();
    let _addr = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'Holder$Data' as const, parent: _parent, addr: _addr, amount: _amount };
}

function loadGetterTupleHolder$Data(source: TupleReader) {
    let _parent = source.readAddress();
    let _addr = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'Holder$Data' as const, parent: _parent, addr: _addr, amount: _amount };
}

function storeTupleHolder$Data(source: Holder$Data) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.parent);
    builder.writeAddress(source.addr);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserHolder$Data(): DictionaryValue<Holder$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeHolder$Data(src)).endCell());
        },
        parse: (src) => {
            return loadHolder$Data(src.loadRef().beginParse());
        }
    }
}

export type Ticket$Data = {
    $$type: 'Ticket$Data';
    seqno: bigint;
    parent: Address;
    holder: Address;
}

export function storeTicket$Data(src: Ticket$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.seqno, 32);
        b_0.storeAddress(src.parent);
        b_0.storeAddress(src.holder);
    };
}

export function loadTicket$Data(slice: Slice) {
    let sc_0 = slice;
    let _seqno = sc_0.loadUintBig(32);
    let _parent = sc_0.loadAddress();
    let _holder = sc_0.loadAddress();
    return { $$type: 'Ticket$Data' as const, seqno: _seqno, parent: _parent, holder: _holder };
}

function loadTupleTicket$Data(source: TupleReader) {
    let _seqno = source.readBigNumber();
    let _parent = source.readAddress();
    let _holder = source.readAddress();
    return { $$type: 'Ticket$Data' as const, seqno: _seqno, parent: _parent, holder: _holder };
}

function loadGetterTupleTicket$Data(source: TupleReader) {
    let _seqno = source.readBigNumber();
    let _parent = source.readAddress();
    let _holder = source.readAddress();
    return { $$type: 'Ticket$Data' as const, seqno: _seqno, parent: _parent, holder: _holder };
}

function storeTupleTicket$Data(source: Ticket$Data) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.seqno);
    builder.writeAddress(source.parent);
    builder.writeAddress(source.holder);
    return builder.build();
}

function dictValueParserTicket$Data(): DictionaryValue<Ticket$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTicket$Data(src)).endCell());
        },
        parse: (src) => {
            return loadTicket$Data(src.loadRef().beginParse());
        }
    }
}

export type TONLottery$Data = {
    $$type: 'TONLottery$Data';
    owner: Address;
    ticketNumber: bigint;
    deployTime: bigint;
    isActive: boolean;
    isFinished: boolean;
}

export function storeTONLottery$Data(src: TONLottery$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeUint(src.ticketNumber, 32);
        b_0.storeUint(src.deployTime, 32);
        b_0.storeBit(src.isActive);
        b_0.storeBit(src.isFinished);
    };
}

export function loadTONLottery$Data(slice: Slice) {
    let sc_0 = slice;
    let _owner = sc_0.loadAddress();
    let _ticketNumber = sc_0.loadUintBig(32);
    let _deployTime = sc_0.loadUintBig(32);
    let _isActive = sc_0.loadBit();
    let _isFinished = sc_0.loadBit();
    return { $$type: 'TONLottery$Data' as const, owner: _owner, ticketNumber: _ticketNumber, deployTime: _deployTime, isActive: _isActive, isFinished: _isFinished };
}

function loadTupleTONLottery$Data(source: TupleReader) {
    let _owner = source.readAddress();
    let _ticketNumber = source.readBigNumber();
    let _deployTime = source.readBigNumber();
    let _isActive = source.readBoolean();
    let _isFinished = source.readBoolean();
    return { $$type: 'TONLottery$Data' as const, owner: _owner, ticketNumber: _ticketNumber, deployTime: _deployTime, isActive: _isActive, isFinished: _isFinished };
}

function loadGetterTupleTONLottery$Data(source: TupleReader) {
    let _owner = source.readAddress();
    let _ticketNumber = source.readBigNumber();
    let _deployTime = source.readBigNumber();
    let _isActive = source.readBoolean();
    let _isFinished = source.readBoolean();
    return { $$type: 'TONLottery$Data' as const, owner: _owner, ticketNumber: _ticketNumber, deployTime: _deployTime, isActive: _isActive, isFinished: _isFinished };
}

function storeTupleTONLottery$Data(source: TONLottery$Data) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeNumber(source.ticketNumber);
    builder.writeNumber(source.deployTime);
    builder.writeBoolean(source.isActive);
    builder.writeBoolean(source.isFinished);
    return builder.build();
}

function dictValueParserTONLottery$Data(): DictionaryValue<TONLottery$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTONLottery$Data(src)).endCell());
        },
        parse: (src) => {
            return loadTONLottery$Data(src.loadRef().beginParse());
        }
    }
}

 type Holder_init_args = {
    $$type: 'Holder_init_args';
    addr: Address;
    parent: Address;
}

function initHolder_init_args(src: Holder_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.addr);
        b_0.storeAddress(src.parent);
    };
}

async function Holder_init(addr: Address, parent: Address) {
    const __code = Cell.fromBase64('te6ccgECDAEAAtcAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts88uCCBAUGABGhhX3aiaGkAAMBvO1E0NQB+GPSAAGORvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6AFUgbBPg+CjXCwqDCbry4IkHAZDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQYNQkV7qOIDDTHwGCEGDUJFe68uCB+gABMYIA1IT4QlJQxwXy9KB/4MAAkTDjDXAJAJ7I+EMBzH8BygBVIFog10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WAfoCye1UAYr6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSAtEB2zwIAAQBcAHs+QGC8OesWx/+m3dmihEdKdUlgYESaFM5p7lF6zHCqXufPjQEuo7OggDUhPhCUkDHBfL0+EJTIchZghAQceGvUAPLHwEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYB+gLJcIEAgn8EA21t2zwwf9sx4AoByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsICwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzA==');
    const __system = Cell.fromBase64('te6cckECDgEAAuEAAQHAAQEFocBtAgEU/wD0pBP0vPLICwMCAWIEDQN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRLbPPLgggUIDAG87UTQ1AH4Y9IAAY5G+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfoAVSBsE+D4KNcLCoMJuvLgiQYBivpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBIC0QHbPAcABAFwAZDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQYNQkV7qOIDDTHwGCEGDUJFe68uCB+gABMYIA1IT4QlJQxwXy9KB/4MAAkTDjDXAJAez5AYLw56xbH/6bd2aKER0p1SWBgRJoUzmnuUXrMcKpe58+NAS6js6CANSE+EJSQMcF8vT4QlMhyFmCEBBx4a9QA8sfASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgH6AslwgQCCfwQDbW3bPDB/2zHgCgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wgLAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAJ7I+EMBzH8BygBVIFog10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WAfoCye1UABGhhX3aiaGkAAOonVhO');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initHolder_init_args({ $$type: 'Holder_init_args', addr, parent })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Holder_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    11: { message: `'Unknown' error` },
    12: { message: `Fatal error` },
    13: { message: `Out of gas error` },
    14: { message: `Virtualization error` },
    32: { message: `Action list is invalid` },
    33: { message: `Action list is too long` },
    34: { message: `Action is invalid or not supported` },
    35: { message: `Invalid source address in outbound message` },
    36: { message: `Invalid destination address in outbound message` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    39: { message: `Outbound message does not fit into a cell after rewriting` },
    40: { message: `Cannot process a message` },
    41: { message: `Library reference is null` },
    42: { message: `Library change action error` },
    43: { message: `Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree` },
    50: { message: `Account state size exceeded limits` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    3645: { message: `Lottery has already started` },
    20821: { message: `No tickets bought` },
    25074: { message: `Lottery is still going` },
    30274: { message: `Lottery has not started yet` },
    50846: { message: `Holder only` },
    51754: { message: `Insufficient funds` },
    54404: { message: `Parent only` },
}

const Holder_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"BuyTickets","header":4242936982,"fields":[{"name":"numberOfTickets","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
    {"name":"InternalSendAmount","header":275898799,"fields":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"InternalAddAmount","header":1624515671,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"InternalSetHolder","header":2452260007,"fields":[{"name":"holder","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Holder$Data","header":null,"fields":[{"name":"parent","type":{"kind":"simple","type":"address","optional":false}},{"name":"addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"Ticket$Data","header":null,"fields":[{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"parent","type":{"kind":"simple","type":"address","optional":false}},{"name":"holder","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TONLottery$Data","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"ticketNumber","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"deployTime","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"isActive","type":{"kind":"simple","type":"bool","optional":false}},{"name":"isFinished","type":{"kind":"simple","type":"bool","optional":false}}]},
]

const Holder_getters: ABIGetter[] = [
]

export const Holder_getterMapping: { [key: string]: string } = {
}

const Holder_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"InternalAddAmount"}},
    {"receiver":"internal","message":{"kind":"text","text":"Send amount"}},
]

export class Holder implements Contract {
    
    static async init(addr: Address, parent: Address) {
        return await Holder_init(addr, parent);
    }
    
    static async fromInit(addr: Address, parent: Address) {
        const init = await Holder_init(addr, parent);
        const address = contractAddress(0, init);
        return new Holder(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Holder(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Holder_types,
        getters: Holder_getters,
        receivers: Holder_receivers,
        errors: Holder_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: InternalAddAmount | 'Send amount') {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalAddAmount') {
            body = beginCell().store(storeInternalAddAmount(message)).endCell();
        }
        if (message === 'Send amount') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
}