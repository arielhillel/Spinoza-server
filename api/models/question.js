const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  MessageType:{
    type: String,
    require: true
  },
  _id: mongoose.Schema.Types.ObjectId,
  schemaVersion: String,
  questionVersion: String,
  previousVersionId: String,
  authorId: String,
  name: String,
  type: String,
  DificaltyLevel: Number,
  tags: Array,
  constent: Object,

  {
    "MessageType" : "AddQuestion|UpdateQuestion",
    "id": "AEAF4717-357A-4545-8905-D4AB94A61DA9",
    "schemaVersion" : "1.0",
    "questionVersion" : "2.0",
    "previousVersionId" : "F317129A-FFFF-4772-3344-A166C5808998",
    "authorId" : "alonf@zion-net.co.il",
    "name" : "C# WinForm QUestion",
    "type" : "MultipleChoiceQuestion",
    "DificaltyLevel" : "2",
    "tags" : [
        "cloud", "dapr"
    ],
    "constent" : 
    {
        "questionText" : "What is Dapr?",
        "AnswerOptions" : [
            {"Description": "Dinozauors and Peaple Reserve", "IsCorrect" : "false"},
            {"Description": "Distributed Application Runtime", "IsCorrect" : "true"},
            {"Description": "Demos Are Pure Rabish", "IsCorrect" : "false"},
            {"Description": "Document Availablity Protocol Response", "IsCorrect" : "false"}
            
        ]
    }
}
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Question", questionSchema);
