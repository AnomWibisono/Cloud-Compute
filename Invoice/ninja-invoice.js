class NinjaInvoice {
    constructor(containerName, minutes) {
      this.containerName = containerName;
      this.minutes = minutes;
        
        // const date = new Date(inputDate);
        // const minutes = date.getMinutes();
        //console.log(minutes);
        
        //const now = new Date();
        //const minutes = now.getMinutes();
        //console.log(minutes); // Output: current minutes

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
      console.log("Price\n", "Rp" , total.toLocaleString(), ",00");
      console.log("=============================");
    }
  }
  
  // ini contoh inputnya buat masukin nama containernya apa menitnya berapa
  // Create an instance of NinjaInvoice
  const start = new Date();
  
  const finish = new Date();
  
  const differenceInMilliseconds = finishTime.getTime() - startTime.getTime();
  const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));

  const invoice = new NinjaInvoice("MyDockerContainer", );
      

  // Print the invoice
  invoice.printInvoice();
