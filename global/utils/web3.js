import Web3EthContract from 'web3-eth-contract'
import WallectConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import Web3 from 'web3'
import { store } from '../store/store'
import { useDispatch } from 'react-redux'

const providerOptions = {
    walletconnect: {
        package: WallectConnectProvider,
        options: {
            rpc: {
                8001: 'https://rpc-endpoints.superfluid.dev/mumbai'
            },
            chainId: 8001,
        }
    }
}



export const connect = async () => {
    const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
})
    const provider = await web3Modal.connect()
    await web3Modal.toggleModal()
    provider.on("chainChanged", (chainId) => {
       
        console.log(chainId)

    })
    console.log(provider.chainId)
    if(provider.chainId == 0x13881) {
    try {

        let web3 = new Web3(provider);
        let accounts = await web3.eth.getAccounts()
        let balance = await web3.eth.getBalance(accounts[0])
        let account = accounts[0]


        return {
            account,
            balance,
            provider
        }
    } catch (err) {
        console.log(err);
    }
} else {
    alert('Connect to Mumbai TestNet')
}
}

export const disconnect = async () => {
    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions,
    })
    await web3Modal.clearCachedProvider();
    return null;
}

export const Mint = async (mintAmount) => {
    const tokenAbi = await fetch('config/abi.json')
    const abiJson = await tokenAbi.json()
    Web3EthContract.setProvider(store.getState().blockchain.provider)

    const contract = new Web3EthContract(abiJson, '0xB471991BF9482D9db75b0139382944b7D0A96633');

    try {
        await contract.methods.mint(mintAmount).send({
            from: store.getState().blockchain.account,
            value: (mintAmount * 2) * 10**18
        })
    } catch (err) {
        console.log(err)
    }
}