import { Dialog } from './Dialog';
import { connect } from '../data/wallet';
export function ConnectDialog({onClose}:{onClose:()=>void}){return <Dialog title="Connect" onClose={onClose}><button className="wallet-option" onClick={()=>{connect();onClose();}}><span>Mock wallet</span><code>0x0000…dEaD</code></button></Dialog>;}
