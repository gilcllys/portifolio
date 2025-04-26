'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useTransition } from 'react';

type Props = {
    children: React.ReactNode;
    defaultValue: string;
    label: string;
}


export default function LocaleSwitcherSelector({
    children,
    defaultValue,
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const locale = useLocale();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            // Remove o locale atual do pathname se existir
            const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

            // Navega para o novo locale
            router.push(`/${nextLocale}${pathWithoutLocale}`);
        })
    }
    return (
        <select
            onChange={onSelectChange}
            defaultValue={defaultValue}
            disabled={isPending}
            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {children}
        </select>
    );
}