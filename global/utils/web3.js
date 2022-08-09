import Web3EthContract from 'web3-eth-contract'
import WallectConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import Web3 from 'web3'
import { store } from '../store/store'

const providerOptions = {
    walletconnect: {
        package: WallectConnectProvider,
        options: {
            rpc: {
                137: 'https://polygon-rpc.com'
            },
            chainId: 137,
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
        if(chainId == 0x89) {
            return;
        } else {
            location.reload()
        }
       // location.reload()
        console.log(chainId)

    })
    console.log(provider.chainId)
    if(provider.chainId == 0x89) {
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
    alert('Connect to Polygon Network')
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

    const contract = new Web3EthContract(abiJson, '0xeBFbc2fe3dC42e2a2d9a8E1E08AFd79b9F515ecF');
    const price = await contract.methods.cost().call();
    


    try {
        await contract.methods.mint(mintAmount).send({
            from: store.getState().blockchain.account,
            value: mintAmount * price
        })
    } catch (err) {
        console.log(err)
    }
}