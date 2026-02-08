'use client';

import { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useTranslations } from 'next-intl';

export default function PaymentForm({ bookingId, amount, currency = 'USD', onSuccess, onError }) {
    const t = useTranslations('Booking.step3');
    const [paymentMethod, setPaymentMethod] = useState('stripe');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');

    const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
        currency: currency,
        intent: "capture",
    };

    const handleStripePayment = async () => {
        setIsProcessing(true);
        setError('');
        // Simulate Stripe processing
        setTimeout(() => {
            setIsProcessing(false);
            onSuccess({ method: 'stripe', status: 'completed', id: 'mock_stripe_' + Date.now() });
        }, 1500);
    };

    return (
        <div className="payment-form-container">
            <div className="method-tabs flex gap-4 mb-6">
                <label className={`flex-1 cursor-pointer border-2 rounded-xl p-4 flex items-center gap-3 transition-all ${paymentMethod === 'stripe' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="stripe"
                        className="hidden"
                        checked={paymentMethod === 'stripe'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <i className="fa-brands fa-stripe text-3xl text-indigo-600"></i>
                    <span className="font-bold text-slate-700">Stripe</span>
                </label>
                <label className={`flex-1 cursor-pointer border-2 rounded-xl p-4 flex items-center gap-3 transition-all ${paymentMethod === 'paypal' ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        className="hidden"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <i className="fa-brands fa-paypal text-2xl text-blue-600"></i>
                    <span className="font-bold text-slate-700">PayPal</span>
                </label>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    {error}
                </div>
            )}

            <div className="payment-action-area">
                {paymentMethod === 'stripe' && (
                    <div className="text-center">
                        <div className="mb-6 p-6 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50 flex flex-col items-center justify-center">
                            <i className="fa-brands fa-stripe-s text-4xl text-indigo-600 mb-2"></i>
                            <p className="text-sm text-slate-500">Credit Card payment simulation</p>
                        </div>
                        <button
                            onClick={handleStripePayment}
                            disabled={isProcessing}
                            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isProcessing ? (
                                <><i className="fa-solid fa-circle-notch fa-spin"></i> Processing...</>
                            ) : (
                                <><i className="fa-solid fa-lock"></i> Pay ${amount}</>
                            )}
                        </button>
                    </div>
                )}

                {paymentMethod === 'paypal' && (
                    <div className="paypal-container">
                        <PayPalScriptProvider options={initialOptions}>
                            <PayPalButtons
                                style={{ layout: "vertical" }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: amount.toString(),
                                                },
                                                description: `Booking #${bookingId}`
                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then((details) => {
                                        onSuccess({
                                            method: 'paypal',
                                            status: 'completed',
                                            id: details.id,
                                            details: details
                                        });
                                    });
                                }}
                                onError={(err) => {
                                    console.error("PayPal Error:", err);
                                    setError("Payment failed. Please try again.");
                                    onError && onError(err);
                                }}
                            />
                        </PayPalScriptProvider>
                    </div>
                )}
            </div>
        </div>
    );
}
