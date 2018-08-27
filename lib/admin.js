"use strict";
var kafka = require("./libadminkafka");
var dns = require("dns");

class Admin {

    constructor(kafkaAddress, kafkaPort) {
        this.kafkaPort = kafkaPort;
        this.kafkaAddress = kafkaAddress;
    }

    createTopic(topic, partitions, replicaFactor) {
        dns.resolve(this.kafkaAddress, (err, records) => {
            kafka.createTopic(topic, partitions, replicaFactor, records[0], this.kafkaPort);
        });
        
    }
}

module.exports = Admin;
