import Layout from "../components/layout/Layout";
import styled from "styled-components";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius};
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 10px;
`;

const TagRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Loader = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Insights = () => {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(
    "Click generate to analyze customer reviews..."
  );

  const generateInsights = () => {
    setLoading(true);

    setTimeout(() => {
      setSummary(
        "Customers appreciate fast delivery and product quality. However, recurring issues include packaging damage and delayed customer support responses."
      );
      setLoading(false);
    }, 1500); // fake AI delay
  };

  return (
    <Layout>
      <h1>AI Insights</h1>

      <Container>
        {/* AI Summary */}
        <Card>
          <Title>AI Summary</Title>

          {loading ? (
            <Loader>Analyzing reviews with AI...</Loader>
          ) : (
            <Text>{summary}</Text>
          )}

          <Button onClick={generateInsights}>
            Generate AI Insights
          </Button>
        </Card>

        {/* Positive */}
        <Card>
          <Title>Positive Highlights</Title>
          <TagRow>
            <Tag text="Fast Delivery" type="positive" />
            <Tag text="Good Quality" type="positive" />
            <Tag text="Value for Money" type="positive" />
          </TagRow>
        </Card>

        {/* Negative */}
        <Card>
          <Title>Negative Highlights</Title>
          <TagRow>
            <Tag text="Packaging Issues" type="negative" />
            <Tag text="Late Response" type="negative" />
          </TagRow>
        </Card>
      </Container>
    </Layout>
  );
};

export default Insights;