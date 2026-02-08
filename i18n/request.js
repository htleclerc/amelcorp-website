import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './navigation';

export default getRequestConfig(async (args) => {
    let locale = args.locale;

    if (!locale && args.requestLocale) {
        locale = await args.requestLocale;
    }

    // Validate that the incoming `locale` parameter is valid
    if (!locale || !routing.locales.includes(locale)) {
        notFound();
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
