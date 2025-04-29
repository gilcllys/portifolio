import { useTranslations } from "next-intl";

export default function AboutMe() {
    const t = useTranslations('AboutMe');
    return (
        <p>{t('about')}</p>
    );
}