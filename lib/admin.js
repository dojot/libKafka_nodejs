"use strict";
var kafka = require("./libadminkafka");
var dns = require("dns");

class Admin {

    constructor(kafkaAddress, kafkaPort) {
        this.kafkaPort = kafkaPort;
        this.kafkaAddress = kafkaAddress;
    }

    createTopic(topic, partitions, replicaFactor) {
        dns.lookup(this.kafkaAddress, (err, records) => {
            kafka.createTopic(topic, partitions, replicaFactor, records, this.kafkaPort);
        });

    }
}

module.exports = Admin;
