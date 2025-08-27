import Layout from '../components/layout/Layout'
import Section from '../components/Section'
import { InlineWidget } from "react-calendly";

const LetTalks = () => {
    return (
        <Layout>
            <Section>
                <InlineWidget url="https://calendly.com/mahasos" />
            </Section>
        </Layout>
    )
}

export default LetTalks