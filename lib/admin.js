"use strict";
var kafka = require("./libadminkafka");

class Admin {

    constructor(kafkaAddress, kakfaPort) {
        this.kakfaPort = kakfaPort;
        this.kafkaAddress = kafkaAddress;
    }

    createTopic(topic, partitions, replicaFactor) {
        kafka.createTopic(topic, partitions, replicaFactor, this.kafkaAddress, this.kakfaPort);
    }
}

module.exports = Admin;
