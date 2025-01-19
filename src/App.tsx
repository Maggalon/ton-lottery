import './App.css'
import { useWallet } from './hooks/use-wallet.tsx';
import { useContract } from './hooks/use-contract.tsx';
 
function App() {
  const { userAddress, connectButton, disconnectButton } = useWallet();
  const { contractAddress, deployButton, checkLiveTime} = useContract();
 
  return (
    <>
      <h1>TON Lottery dApp</h1>
 
      {!userAddress && (
        <div className="card">
          {connectButton}
        </div>
      )}
 
      {!!userAddress && (
        <div className="card">
          <span>{userAddress}</span>
          {disconnectButton}
        </div>
      )}
 
      {!!userAddress && !contractAddress && (
        <div className="card">
          {deployButton}
        </div>
      )}
 
      {!!userAddress && !!contractAddress && (
        <div className="card">
          {checkLiveTime}
        </div>
      )}
    </>
  )
}
 
export default App