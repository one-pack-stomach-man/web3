import "@nomiclabs/hardhat-ethers"
import { Contract } from "ethers"
import { ethers } from "hardhat"

async function deploy() {
    const Hello = await ethers.getContractFactory('HelloWorld')
    const hello = await Hello.deploy()
    await hello.deployed()    
    return hello
}

async function sayHello(hello: Contract) {
    console.log("Say hello: ", await hello.hello())
}

deploy().then(sayHello)