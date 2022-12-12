import styles from './ShopSummary.module.css';

const ShopSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>CBD, Delivered To You</h2>
            <p>
                Hanf gilt als eine der ältesten Kulturpflanzen, die von Menschen genutzt wird.
                Das breite Spektrum an gesundheitsfördernden Inhaltsstoffen und die vielfältigen Anwendungsbereiche im täglichen Leben machen
                die Hanfpflanze somit zu einem wichtigen Rohstoff seit mehr als Tausenden von Jahren.
            </p>
            <p>
                Alle unsere Produkte sind von höchster Qualität und werden innerhalb weniger Tage bis an deine Haustüre geliefert.
            </p>
        </section>
    );
};

export default ShopSummary;