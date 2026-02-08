'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import styles from './BookingCalendar.module.css';

const BookingCalendar = ({ onSelectSlot }) => {
    const t = useTranslations('Calendar');
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [loading, setLoading] = useState(false);

    const monthNames = t.raw('months');
    const dayNames = t.raw('days');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    useEffect(() => {
        if (selectedDate) {
            fetchSlots(selectedDate);
        }
    }, [selectedDate]);

    const fetchSlots = async (dateStr) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/booking/slots?date=${dateStr}`);
            const contentType = res.headers.get('content-type');

            if (contentType && contentType.includes('application/json')) {
                const data = await res.json();
                setAvailableSlots(data.slots || []);
            } else {
                const text = await res.text();
                console.error('Non-JSON slots response:', text.substring(0, 200));
                setAvailableSlots([]);
            }
        } catch (error) {
            console.error('Error fetching slots:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDateSelect = (date) => {
        if (date < today) return;
        const dateStr = date.toISOString().split('T')[0];
        setSelectedDate(dateStr);
        setSelectedSlot('');
    };

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
        onSelectSlot({ date: selectedDate, timeSlot: slot });
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const days = [];

        // Padding for first week
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className={styles.dateTileDisabled}></div>);
        }

        // Real days
        for (let d = 1; d <= daysInMonth; d++) {
            const date = new Date(year, month, d);
            const dateStr = date.toISOString().split('T')[0];
            const isToday = date.getTime() === today.getTime();
            const isSelected = dateStr === selectedDate;
            const isDisabled = date < today;

            days.push(
                <div
                    key={d}
                    className={`
                        ${styles.dateTile} 
                        ${isToday ? styles.today : ''} 
                        ${isSelected ? styles.selected : ''} 
                        ${isDisabled ? styles.disabled : ''}
                    `}
                    onClick={() => handleDateSelect(date)}
                >
                    {d}
                </div>
            );
        }

        return days;
    };

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarMain}>
                <div className={styles.calendarHeader}>
                    <h3 className={styles.currentMonth}>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
                    <div className={styles.navButtons}>
                        <button onClick={prevMonth} className={styles.navBtn}><i className="fa-solid fa-chevron-left"></i></button>
                        <button onClick={nextMonth} className={styles.navBtn}><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>

                <div className={styles.calendarBody}>
                    <div className={styles.grid}>
                        {dayNames.map(day => (
                            <div key={day} className={styles.dayHeader}>{day}</div>
                        ))}
                        {renderCalendar()}
                    </div>
                </div>
            </div>

            <div className={styles.slotsGroup}>
                {selectedDate ? (
                    <>
                        <label className={styles.label}>{t('availableTimes', { date: selectedDate })}</label>
                        {loading ? (
                            <p className={styles.loading}>{t('loading')}</p>
                        ) : availableSlots.length > 0 ? (
                            <div className={styles.slotsGrid}>
                                {availableSlots.map((slot) => (
                                    <button
                                        key={slot}
                                        type="button"
                                        className={`${styles.slotBtn} ${selectedSlot === slot ? styles.selected : ''}`}
                                        onClick={() => handleSlotSelect(slot)}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p className={styles.noSlots}>{t('noSlots')}</p>
                        )}
                    </>
                ) : (
                    <div className={styles.noSlots} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p>{t('selectDate') || 'Select a date'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingCalendar;
