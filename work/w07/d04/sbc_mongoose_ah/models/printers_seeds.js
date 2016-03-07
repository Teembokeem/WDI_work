var mongoose = require('mongoose'),
    locus    = require('locus');

mongoose.connect('mongodb://localhost/sbc');

var Printer = mongoose.model(
  "Printer",
  {color: String,
   purchased_at: Date,
   ink: String,
   model_number: String,
   scanner: Boolean,
   hres_photo_printing: Boolean,
   avg_lifespan_cartridge: Number,
   changed_since: Date
  }
);


Printer.remove({}, function(err, results) {

  console.log("creating a printer...");
  Printer.create([
    {color: true, inkType: "Ink", modelNo: "12312"},
    {color: true, inkType: "Ink", modelNo: "012321k"}
    ], function(err, printers) {

      console.log(printers);
      mongoose.connection.close();
  });

});

function printerStatus() {
  console.log("Printing out printers....");
  console.log();
  console.log();

  console.log("The database of " + Printer.collection.name + " currently holds:")
  console.log();
  Printer.find({}, function(err, results) {
    results.forEach(function(mug) {
      console.log("______________________")
      console.log("Model: " + mug.model_number);
      console.log("purchased: " + mug.purchased_at);
      console.log("color: " + mug.color);
      console.log("ink: " + mug.ink);
      console.log("Scanner?: " + mug.scanner);
      console.log("High Resolution Photo Editing?: " + mug.hres_photo_printing);
      console.log("Average Number of Copies/cartridge: " + mug.avg_lifespan_cartridge);
      console.log("Last Changed: " + mug.changed_since);
      console.log();
    })
  });
}


module.exports = {
  Printer: Printer,
  printerStatus: printerStatus
};

// printerStatus();
