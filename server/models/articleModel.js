const mongoose = require("mongoose");

articleSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "published", "updated"],
      default: "new",
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Article", articleSchema);
