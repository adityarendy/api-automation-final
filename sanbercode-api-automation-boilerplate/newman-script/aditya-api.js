const newman = require("newman")

newman.run({
    collection: "json-collection/Aditya Rendy - SanberCode.postman_collection.json",
    environment: "json-env/Aditya.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
