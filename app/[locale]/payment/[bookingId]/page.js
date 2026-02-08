'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import PaymentForm from '@/components/PaymentForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';

export default function PaymentPage() {
    const t = useTranslations('Booking.step3');
    const params = useParams();
    const { bookingId } = params;
    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Fetch booking details -> In a real app we should have an endpoint to get booking by ID
        // For now we will mock it or just assume it exists since we have the ID
        // If we want to be strict we should create a GET endpoint
        setLoading(false);
    }, [bookingId]);

    const handlePaymentSuccess = async (details) => {
        try {
            const res = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: bookingId,
                    paymentStatus: 'paid',
                    status: 'scheduled' // Ensure it is scheduled
                }),
            });

            if (res.ok) {
                setSuccess(true);
            }
        } catch (error) {
            console.error('Failed to update booking', error);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    if (success) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full border border-slate-100">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-800 mb-2">Payment Successful!</h1>
                        <p className="text-slate-500 mb-8">Your booking has been confirmed and paid. Thank you for choosing Amelcorp.</p>
                        <a href="/" className="inline-block py-3 px-8 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                            Return Home
                        </a>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            Secure Payment
                        </span>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Complete Your Booking</h1>
                        <p className="text-slate-500">Booking Reference: <span className="font-mono text-slate-900">{bookingId}</span></p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-6 bg-slate-50 border-b border-slate-200">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-slate-700">Strategic Consultation</h3>
                                <span className="font-bold text-lg text-slate-900">$199.00</span>
                            </div>
                            <p className="text-sm text-slate-500">One-time payment for consultation session</p>
                        </div>
                        <div className="p-8">
                            <PaymentForm
                                bookingId={bookingId}
                                amount={199}
                                onSuccess={handlePaymentSuccess}
                            />
                        </div>
                    </div>

                    <div className="mt-8 text-center text-xs text-slate-400">
                        <p className="mb-2"><i className="fa-solid fa-lock mr-1"></i> Payments are securely processed</p>
                        <p>Amelcorp Logistics Inc. &copy; {new Date().getFullYear()}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
