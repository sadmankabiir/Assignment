const mongoose = require("mongoose");
const EmailRecipient = require("./models/EmailRecipient");
const dotenv = require("dotenv");
dotenv.config();

const recipients = [
  { id: "BU79786", name: "Andrew", email: "andrew@example.com" },
  { id: "QZ44356", name: "Anne", email: "anne@example.com" },
  { id: "AI49188", name: "Anthony", email: "anthony@example.com" },
  { id: "WW63253", name: "Barbara", email: "barbara@example.com" },
  { id: "HB64268", name: "Brian", email: "brian@example.com" },
  { id: "OC83172", name: "Bruce", email: "bruce@example.com" },
  { id: "XZ87318", name: "Carol", email: "carol@example.com" },
  { id: "CF85061", name: "Christine", email: "christine@example.com" },
  { id: "DY87989", name: "Christopher", email: "christopher@example.com" },
  { id: "BQ94931", name: "Craig", email: "craig@example.com" },
  { id: "SX51350", name: "David", email: "david@example.com" },
  { id: "VQ65197", name: "Diane", email: "diane@example.com" },
  { id: "DP39365", name: "Elizabeth", email: "elizabeth@example.com" },
  { id: "SJ95423", name: "Grant", email: "grant@example.com" },
  { id: "IL66569", name: "Gregory", email: "gregory@example.com" },
  { id: "BW63560", name: "Heather", email: "heather@example.com" },
  { id: "FV94802", name: "Helen", email: "helen@example.com" },
  { id: "OE15005", name: "Ian", email: "ian@example.com" },
  { id: "WC83389", name: "James", email: "james@example.com" },
  { id: "FL50705", name: "Janet", email: "janet@example.com" },
  { id: "ZK25313", name: "Janice", email: "janice@example.com" },
  { id: "SV62436", name: "Jennifer", email: "jennifer@example.com" },
  { id: "YH23384", name: "John", email: "john@example.com" },
  { id: "TZ98966", name: "Judith", email: "judith@example.com" },
  { id: "HM55802", name: "Julie", email: "julie@example.com" },
  { id: "FS42516", name: "Karen", email: "karen@example.com" },
  { id: "US89481", name: "Kevin", email: "kevin@example.com" },
  { id: "HO30839", name: "Linda", email: "linda@example.com" },
  { id: "GE62437", name: "Lorraine", email: "lorraine@example.com" },
  { id: "EJ77678", name: "Lynette", email: "lynette@example.com" },
  { id: "SV85652", name: "Margaret", email: "margaret@example.com" },
  { id: "UL64533", name: "Mark", email: "mark@example.com" },
  { id: "PF41800", name: "Mary", email: "mary@example.com" },
  { id: "AO98601", name: "Michael", email: "michael@example.com" },
  { id: "SK67821", name: "Pamela", email: "pamela@example.com" },
  { id: "YV55495", name: "Patricia", email: "patricia@example.com" },
  { id: "KY38074", name: "Paul", email: "paul@example.com" },
  { id: "DM79012", name: "Peter", email: "peter@example.com" },
  { id: "CM61827", name: "Philip", email: "philip@example.com" },
  { id: "WC35801", name: "Richard", email: "richard@example.com" },
  { id: "QG25316", name: "Robert", email: "robert@example.com" },
  { id: "MB98372", name: "Robyn", email: "robyn@example.com" },
  { id: "IL19217", name: "Sandra", email: "sandra@example.com" },
  { id: "SR38658", name: "Stephen", email: "stephen@example.com" },
  { id: "DH41343", name: "Steven", email: "steven@example.com" },
  { id: "HG65722", name: "Susan", email: "susan@example.com" },
  { id: "BU27331", name: "Suzanne", email: "suzanne@example.com" },
  { id: "XM45289", name: "Wayne", email: "wayne@example.com" },
  { id: "KP34198", name: "Wendy", email: "wendy@example.com" },
  { id: "WE95729", name: "William", email: "william@example.com" },
];

const seedEmailRecipients = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await EmailRecipient.deleteMany();

    // Insert new data
    await EmailRecipient.insertMany(recipients);
    console.log("Email Recipients seeded successfully!");
  } catch (error) {
    console.error("Error seeding email recipients:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedEmailRecipients();
