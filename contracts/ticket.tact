import "./messages";

contract Ticket {

    seqno: Int as uint32;
    parent: Address;
    holder: Address = newAddress(0, 0);

    init(seqno: Int, parent: Address) {
        self.seqno = seqno;
        self.parent = parent;
    }

    receive(msg: InternalSetHolder) {
        require(sender() == self.parent, "Parent only");
        self.holder = msg.holder;
    }

    receive("Reward winner") {
        require(sender() == self.parent, "Parent only");

        send(SendParameters{
            to: self.holder,
            value: 0,
            mode: SendRemainingBalance + SendIgnoreErrors
        });
    }

    get fun getHolder(): Address {
        return self.holder;
    }
    
}