message BuyTickets {
    numberOfTickets: Int as uint32;
}

message InternalSendAmount {
    addr: Address;
    amount: Int as coins;
}

message InternalAddAmount {
    amount: Int as coins;
}

message InternalSetHolder {
    holder: Address;
}