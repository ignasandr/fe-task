import styles from './Referrals.module.scss'
import StepItem from './StepItem'

const steps: { step: '1' | '2' | '3', right: boolean }[] = [
    { step: '1', right: false },
    { step: '2', right: true },
    { step: '3', right: false },
]

export default function Steps() {
    return (
        <ul className={styles.steps}>
            {steps.map(({ step, right }) => (
                <li key={step}>
                    <StepItem step={step} right={right} />
                </li>
            ))}
        </ul>
    )
}