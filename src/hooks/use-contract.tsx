import { useEffect, useState } from 'react';
import { parseTon } from '@fotonjs/core';
 
import { lotteryClient, publicClient } from '../ton-clients.ts';
 
// Define localStorage key for storing the deployed smart contract address without deploying it each time.
const LS_KEY = 'counter-contract-address';

export const useContract = () => {
    const [loading, setLoading] = useState(false);

    const [contractAddress, setContractAddress] = useState<string | undefined>(localStorage.getItem(LS_KEY) || undefined)
    const [liveTime, setLiveTime] = useState<number | undefined>(undefined)

    const setAddress = (address: string) => {
        localStorage.setItem(LS_KEY, address);
        setContractAddress(address);
    };

    useEffect(() => {
        lotteryClient.setAddress(contractAddress);
    }, []);

    // useEffect(() => {
    //     getLotteryLiveTime();
     
    //     const interval = setInterval(getLotteryLiveTime, 1000);
    //     return () => clearInterval(interval);
    // }, [contractAddress]);

    const getLotteryLiveTime = async () => {
        if (!contractAddress) return

        setLoading(true)

        const res = await lotteryClient.read({
            getter: 'lotteryLiveTime',
            arguments: [],
        })

        if (typeof res.data === 'bigint') {
            setLiveTime(res.data)
        }

        setLoading(false)
    }

    const onDeploy = async () => {
        const res = await lotteryClient.deploy({
          value: parseTon('0.05'),
          arguments: [],
          payload: {
            queryId: BigInt(Math.floor(Math.random() * 1000)),
          },
        });
     
        if (res.data) {
          setAddress(res.data.address);
        } else {
          alert(res.error.message);
        }
    };

    const deployButton = (
        <button onClick={onDeploy}>
          Deploy Counter contract
        </button>
    );

    const checkLiveTime = (
        <>
          <span>Last checked lottery live time: {liveTime?.toString()}</span>
          <button disabled={loading} onClick={getLotteryLiveTime}>
            {loading ? 'Loading...' : 'Check live time'}
          </button>
        </>
    );

    return {
        contractAddress,
        deployButton,
        checkLiveTime,
    }

}