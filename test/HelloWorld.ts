import "@nomiclabs/hardhat-ethers"
import { ethers }from "hardhat"
import { expect } from "chai"

describe("hello world", () => {
    it("it should say hi",async () => {
        // 1. setup 
        // 2. deploy contract
        // 3. call test function

        // 2.
        const Hello = await ethers.getContractFactory("HelloWorld");
        const hello = await Hello.deploy();  
        await hello.deployed();
        expect(await hello.hello()).to.equal("Hello, World")
    })
})