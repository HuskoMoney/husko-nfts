import Web3EthContract from 'web3-eth-contract'
import WallectConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import Web3 from 'web3'

const providerOptions = {
    walletconnect: {
        package: WallectConnectProvider,
        options: {
            rpc: {
                56: 'https://bsc-dataseed1.binance.org'
            },
            chainId: 56,
        }
    }
}



export const connect = async () => {
    const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
})

    try {
        const provider = await web3Modal.connect()
        await web3Modal.toggleModal()
        Web3EthContract.setProvider(provider)

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

export const Mint = async () => {

}