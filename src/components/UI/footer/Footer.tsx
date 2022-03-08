import styles from '../../../styles/footerStyles.module.css';
import { Section } from '../../Section';
import { CopyRight } from './CopyRight';
import { SocialNetworks } from './SocialNetworks';

export const Footer = () => {
    return (
        <footer
            className={styles.footer}
        >
            <Section>
                <SocialNetworks />
                <CopyRight />
            </Section>
        </footer>
    );
}