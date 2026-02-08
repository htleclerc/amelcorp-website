/**
 * Generates random available slots for a given date according to business rules.
 * Business hours: Mon-Fri, 09:00 - 18:00
 * Slots: 30 minutes
 * Random slots per day: 5 to 10
 */
export function generateAvailableSlots(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();

    // Weekend check (0 is Sunday, 6 is Saturday)
    if (day === 0 || day === 6) {
        return [];
    }

    const allPossibleSlots = [];
    const startHour = 9;
    const endHour = 18;

    for (let hour = startHour; hour < endHour; hour++) {
        allPossibleSlots.push(`${hour.toString().padStart(2, '0')}:00`);
        allPossibleSlots.push(`${hour.toString().padStart(2, '0')}:30`);
    }

    // Randomly pick between 5 and 10 slots
    const numSlots = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const shuffled = [...allPossibleSlots].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, numSlots).sort();
}

/**
 * Checks if a specific day is a workday.
 */
export function isWorkDay(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();
    return day !== 0 && day !== 6;
}
