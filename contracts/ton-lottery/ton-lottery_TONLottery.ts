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

 type TONLottery_init_args = {
    $$type: 'TONLottery_init_args';
}

function initTONLottery_init_args(src: TONLottery_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function TONLottery_init() {
    const __code = Cell.fromBase64('te6ccgECHwEABtIAART/APSkE/S88sgLAQIBYgIDAurQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFNs88uCCyPhDAcx/AcoAVUBQVCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhLLH8sfEsoAygDJ7VQcBAIBIBobA/btou37AZIwf+BwIddJwh+VMCDXCx/eIIIQ/OYUlrqOlTDTHwGCEPzmFJa68uCB0x8BMds8f+AgghAQceGvuo6zMNMfAYIQEHHhr7ry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfoAWWwS4CCCEJRqmLYFBgcC3oEOPSOz8vSCAMoq+EFvJBNfA4IQO5rKACOovvL0+EP4Qvgo2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgjghA7msoAqBUIA+wQNkVGgWHyBts8wgmRIJFw4hfy9IIAxp74Q/goUnDbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI+ELHBfL0UEZyf1UgbW1t2zwwUEN/FBUYAma6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXALDAJCyAGCEGDUJFdYyx8B+gLJE4IK+vCAWnICfwZFVds8MIrkGAkC/gOk+EP4KFIg2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Ij4QsgBghCSKoSnWMsfASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskTggr68IAQCgEWWnICfwZFVds8MAMYATxtbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPDAYA8T5ASCC8AxGnosyLdo26lxhsLiwLByI2ZNoIBVRrW7q6MYKLvgguo6MMNs8bCH4I39Yf9sx4CCC8MLuaJgT3/OXHGImS+H3KnLoZXc7dyObG9/2bLx1yqPyuo6GMNs8f9sx4A8NDgT02zyBdkIi8vRVMIFh8gXbPDHCCRXy9IFRVSLCAPL0cSKk+ERul/gl+BV/+GTeIaH4EaD4Q/goEts8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgPFBARAVaC8IvX37TlS8elh/zT0Ct65s0fbG3TofioxVbQC542Hmqxuo6F2zx/2zHgEwAS+EJSUMcF8uCEAKgC0PQEMG0BggCkzQGAEPQPb6Hy4IcBggCkzSICgBD0F8gByPQAyQHMcAHKAEADAoEBAc8AASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskCLoj4J28QgGSpBKcFcn8EA21t2zwwVQJ/EhgAIgAAAABSZXdhcmQgd2lubmVyBM5VMIFh8gXbPMIJkSCRcOIW8vT4Q/hC+CjbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIiIIJMS0Acn8EA21tFBUWFwAI+CMjoQDaAtD0BDBtAYIA4DYBgBD0D2+h8uCHAYIA4DYiAoAQ9BfIAcj0AMkBzHABygBAA1kg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyQAeAAAAAFNlbmQgYW1vdW50AQrbPDBVAxgByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsIGQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIRviju2ebZ42KMHB0AEb4V92omhpAADAGO7UTQ1AH4Y9IAAY4s+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTH9Mf0gDSAFVAbBXgMPgo1wsKgwm68uCJ2zweAAIkABRwcHD4QvgjUEIT');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initTONLottery_init_args({ $$type: 'TONLottery_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const TONLottery_errors: { [key: number]: { message: string } } = {
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

const TONLottery_types: ABIType[] = [
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

const TONLottery_getters: ABIGetter[] = [
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

export const TONLottery_getterMapping: { [key: string]: string } = {
    'owner': 'getOwner',
}

const TONLottery_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"text","text":"Start lottery"}},
    {"receiver":"internal","message":{"kind":"typed","type":"BuyTickets"}},
    {"receiver":"internal","message":{"kind":"text","text":"Define winner"}},
    {"receiver":"internal","message":{"kind":"text","text":"Return request"}},
    {"receiver":"internal","message":{"kind":"typed","type":"InternalSendAmount"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class TONLottery implements Contract {
    
    static async init() {
        return await TONLottery_init();
    }
    
    static async fromInit() {
        const init = await TONLottery_init();
        const address = contractAddress(0, init);
        return new TONLottery(address, init);
    }
    
    static fromAddress(address: Address) {
        return new TONLottery(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  TONLottery_types,
        getters: TONLottery_getters,
        receivers: TONLottery_receivers,
        errors: TONLottery_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: 'Start lottery' | BuyTickets | 'Define winner' | 'Return request' | InternalSendAmount | Deploy) {
        
        let body: Cell | null = null;
        if (message === 'Start lottery') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'BuyTickets') {
            body = beginCell().store(storeBuyTickets(message)).endCell();
        }
        if (message === 'Define winner') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'Return request') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalSendAmount') {
            body = beginCell().store(storeInternalSendAmount(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}