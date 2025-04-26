import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelector from "./LocaleSwitcherSelector";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
    const t = useTranslations("NavBar");
    const locale = useLocale();

    return (
        <LocaleSwitcherSelector defaultValue={locale}>
            {
                routing.locales.map((cur) => (
                    <option key={cur} value={cur}>
                        {t(cur)}
                    </option>
                ))
            }
        </LocaleSwitcherSelector>
    )
}