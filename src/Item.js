import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './assets/nume_btn.png';
import Paypal from './assets/paypal_btn.png';
const { authorize, checkoutWithNume } = require('nume-pay');

const App = () => {
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 768px)').matches);
    const [isLoading, setIsLoading] = useState(true);
    const [accessToken, setAccessToken] = useState('');
    useEffect(() => {
        window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => setMatches(e.matches));
    }, []);
    useEffect(() => {
        const fetchAccessToken = async () => {
            let accessToken = await authorize(
                process.env.REACT_APP_NUME_CLIENT_ID,
                process.env.REACT_APP_NUME_CLIENT_SECRET
            );
            setAccessToken(accessToken);
            setIsLoading(false);
        };
        fetchAccessToken();
    }, []);

    const { state } = useLocation();
    const handleSubmit = async () => {
        const payload = {
            accessToken: accessToken,
            referenceId: 'ref',
            amountUsd: 20.5,
            products: [
                {
                    skuId: 'he',
                    count: 4,
                },
            ],
        };
        checkoutWithNume(payload)
            .then((res) => {
                console.log(res);
                if (res.orderStatus === 'APPROVED') {
                    window.location.href = 'success';
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    if (isLoading) {
        return (
            <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                Loading...
            </div>
        );
    }
    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <div style={{ padding: '8px', backgroundColor: '#F3F3F3' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700 }}>Product Details</h3>
            </div>
            <div
                style={{
                    maxWidth: '90%',
                    margin: 'auto',
                    display: matches ? 'flex' : 'block',
                    padding: '20px',
                    marginTop: '72px',
                }}>
                <div style={{ padding: '10px', width: matches ? '40%' : 'auto' }}>
                    <img style={{ maxWidth: '350px', width: '90%' }} src={state.img} alt={state.name} />
                </div>
                <div style={{ padding: '10px', width: matches ? '60%' : 'auto', textAlign: 'left' }}>
                    <h1 style={{ fontWeight: 700 }}>{state.nmame}</h1>
                    <h4 style={{ fontWeight: 700 }}>${state.price}</h4>
                    <p>
                        In this eye-opening account, Cal Newport debunks the long-held belief that "follow your passion"
                        is good advice. Not only is the cliché flawed-preexisting passions are rare and have little to
                        do with how most people end up loving their work-but it can also be dangerous, leading to
                        anxiety and chronic job hopping.
                    </p>
                    <p>
                        After making his case against passion, Newport sets out on a quest to discover the reality of
                        how people end up loving what they do. Spending time with organic farmers, venture capitalists,
                        screenwriters, freelance computer programmers, and others who admitted to deriving great
                        satisfaction from their work, Newport uncovers the strategies they used and the pitfalls they
                        avoided in developing their compelling careers.
                    </p>
                    <img
                        style={{
                            width: '300px',
                            cursor: 'pointer',
                            display: 'block',
                            marginBottom: '8px',
                            marginTop: '40px',
                        }}
                        src={Logo}
                        alt="nume"
                        onClick={handleSubmit}
                    />
                    <img
                        style={{
                            marginLeft: '-4px',
                            width: '310px',
                            cursor: 'pointer',
                        }}
                        src={Paypal}
                        alt="paypal"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
