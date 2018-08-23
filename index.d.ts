declare module "@dojot/adminkafka" {
  class Admin {
    constructor(kafkaAddress: string, kakfaPort: number);
    createTopic(topic: string, partitions: number, replicaFactor: number): number;
  }
}
