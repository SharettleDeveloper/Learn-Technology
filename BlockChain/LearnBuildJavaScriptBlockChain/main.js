const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, data) {
    this.index = 0;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = "0";
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();
  }

  mineBlock(difficulty) {}
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesis()];
  }

  createGenesis() {
    return new Block("01/01/2017", { name: "Genesis block" });
  }

  latestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.latestBlock().hash;
    newBlock.index += 1;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  checkValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

let jsChain = new Blockchain();
jsChain.addBlock(new Block("12/25/2017", { amount: 5 }));
jsChain.addBlock(new Block("12/26/2017", { amount: 10 }));
jsChain.addBlock(new Block("11/26/2017", { amount: 10 }));

console.log(JSON.stringify(jsChain, null, 2));
console.log("Is blockchain valid? " + jsChain.checkValid());
