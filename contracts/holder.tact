import "./messages";

contract Holder {

    parent: Address;
    addr: Address;
    amount: Int as coins;

    init(addr: Address, parent: Address) {
        self.addr = addr;
        self.parent = parent;
        self.amount = 0;
    }

    receive(msg: InternalAddAmount) {
        require(sender() == self.parent, "Parent only");
        self.amount = self.amount + msg.amount;
    }

    receive("Send amount") {
        require(sender() == self.parent, "Parent only");

        send(SendParameters{
            to: sender(),
            body: InternalSendAmount{addr: self.addr, amount: self.amount}.toCell(),
            value: 0,
            mode: SendRemainingBalance + SendIgnoreErrors
        });
    }

}