import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'pt-BR'],

    // Used when no locale matches
    defaultLocale: 'pt-BR'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
