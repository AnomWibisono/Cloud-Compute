import datetime

class NinjaInvoice:
    def __init__(self, containerName, minutes):
        self.containerName = containerName
        self.minutes = minutes

    def calculateTotal(self):
        baseFee = 10000  # Initial fee for the first 5 minutes
        additionalFee = 10000  # Fee for each additional minute
        totalFee = baseFee

        if self.minutes > 0:
            if self.minutes > 1:
                extraMinutes = self.minutes - 1
                totalFee += extraMinutes * additionalFee
        else:
            totalFee = 0

        return totalFee

    def printInvoice(self):
        total = self.calculateTotal()
        print("=============================")
        print("          INVOICE            ")
        print("=============================")
        print("Container Name:", self.containerName)
        print("Time Used\n", self.minutes)
        print("-----------------------------")
        print("Price\n", "Rp", "{:,.2f}".format(total))
        print("=============================")

start = datetime.datetime.now()
finish = datetime.datetime.now()

differenceInSeconds = (finish - start).total_seconds()

invoice = NinjaInvoice("MyDockerContainer", differenceInSeconds // 60)

# Print the invoice
invoice.printInvoice()
