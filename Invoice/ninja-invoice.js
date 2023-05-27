class NinjaInvoice {
    constructor(containerName, minutes) {
      this.containerName = containerName;
      this.minutes = minutes;
    }
  
    calculateTotal() {
      const baseFee = 10000; // Initial fee for the first 5 minutes
      const additionalFee = 10000; // Fee for each additional minute
      let totalFee = baseFee;
  
      if (this.minutes > 5) {
        const extraMinutes = this.minutes - 5;
        totalFee += extraMinutes * additionalFee;
      }
  
      return totalFee;
    }
  
    printInvoice() {
      const total = this.calculateTotal();
      console.log("=============================");
      console.log("          INVOICE            ");
      console.log("=============================");
      console.log("Container Name: ", this.containerName);
      console.log("Time Used\n", this.minutes);
      console.log("-----------------------------");
      console.log("Price\n", "Rp , total.toLocaleString(), ",00");
      console.log("=============================");
    }
  }
  
  // Create an instance of NinjaInvoice
  const invoice = new NinjaInvoice("MyDockerContainer", 7);
  
  // Print the invoice
  invoice.printInvoice();
