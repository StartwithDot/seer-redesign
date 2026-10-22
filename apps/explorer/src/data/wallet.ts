import { useSyncExternalStore } from 'react';
export const MOCK_ADDRESS = '0x000000000000000000000000000000000000dEaD';
let state = { connected: false, address: MOCK_ADDRESS, chainId: 100, xDAI: 24.69, sDAI: 0 };
const listeners = new Set<() => void>();
const emit = () => listeners.forEach(fn => fn());
export function connect() { state = { ...state, connected: true }; emit(); }
export function switchChain(chainId: number) { state = { ...state, chainId }; emit(); }
export function disconnect() { state = { ...state, connected: false }; emit(); }
export function setBalance(n: number) { if (Number.isFinite(n) && n >= 0) { state = { ...state, sDAI: n }; emit(); } }
export const balance = (symbol: string) => symbol === 'xDAI' ? state.xDAI : symbol === 'sDAI' ? state.sDAI : 0;
export const wallet = () => state;
export const reverseLookup = (address: string) => `${address.slice(0,6)}…${address.slice(-4)}`;
export async function sign(): Promise<never> { await new Promise(resolve => setTimeout(resolve, 600)); throw new Error('User rejected the request.'); }
export function useWallet() { return useSyncExternalStore(fn => { listeners.add(fn); return () => { listeners.delete(fn); }; }, wallet); }
