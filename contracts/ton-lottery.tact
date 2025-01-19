import "@stdlib/deploy";
import "@stdlib/ownable";
import "./messages";
import "./holder.tact";
import "./ticket.tact";

contract TONLottery with Deployable, Ownable {

    const ticketPrice: Int = ton("1");
    const duration: Int = 10;

    owner: Address;
    ticketNumber: Int as uint32 = 0;
    deployTime: Int as uint32;
    isActive: Bool = false;
    isFinished: Bool = false;

    init () {
        self.owner = sender();
        self.deployTime = now();
    }

    receive("Start lottery") {
        self.requireOwner();
        self.deployTime = now();
        self.isActive = true;
    }

    receive(msg: BuyTickets) {
        require(!self.isActive, "Lottery has already started");
        require(context().value >= self.ticketPrice * msg.numberOfTickets, "Insufficient funds");

        let holderInit: StateInit = initOf Holder(sender(), myAddress());
        send(SendParameters{
            to: contractAddress(holderInit),
            body: InternalAddAmount{amount: msg.numberOfTickets * self.ticketPrice}.toCell(),
            value: ton("0.05"),
            mode: SendIgnoreErrors,
            code: holderInit.code,
            data: holderInit.data
        });

        repeat(msg.numberOfTickets) {
            self.ticketNumber = self.ticketNumber + 1;
            let ticketInit: StateInit = initOf Ticket(self.ticketNumber, myAddress());
            send(SendParameters{
                to: contractAddress(ticketInit),
                body: InternalSetHolder{holder: sender()}.toCell(),
                value: ton("0.05"),
                mode: SendIgnoreErrors,
                code: ticketInit.code,
                data: ticketInit.data
            });
        }
    }

    fun getLotteryLiveTime(): Int {
        return now() - self.deployTime;
    }

    receive("Define winner") {
        self.requireOwner();
        require(self.isActive, "Lottery has not started yet");
        require(self.getLotteryLiveTime() >= self.duration, "Lottery is still going");
        require(self.ticketNumber > 0, "No tickets bought");

        let winnerTicket = random(1, self.ticketNumber + 1);
        send(SendParameters{
            to: contractAddress(initOf Ticket(winnerTicket, myAddress())),
            body: "Reward winner".asComment(),
            value: myBalance() / 100 * 5,
            mode: SendIgnoreErrors
        });

        self.isFinished = true;
    }

    receive("Return request") {
        require(self.getLotteryLiveTime() >= self.duration && self.isFinished, "Lottery is still going");
        send(SendParameters{
            to: contractAddress(initOf Holder(sender(), myAddress())),
            body: "Send amount".asComment(),
            value: ton("0.02"),
            mode: SendIgnoreErrors
        });
    }

    receive(msg: InternalSendAmount) {
        require(self.getLotteryLiveTime() >= self.duration && self.isFinished, "Lottery is still going");
        require(sender() == contractAddress(initOf Holder(msg.addr, myAddress())), "Holder only");
        send(SendParameters{
            to: msg.addr,
            value: msg.amount,
            mode: SendIgnoreErrors
        });
    }

    get fun lotteryLiveTime(): Int {
        return now() - self.deployTime;
    }

}