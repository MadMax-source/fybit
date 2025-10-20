import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">FYBIT</Link>
            <Link href="/"><Button variant="secondary" size="sm">Back to Home</Button></Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: October 18, 2025</p>

        <Card className="prose dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using FYBIT, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">2. Eligibility</h2>
              <p>You must be at least 18 years old to use FYBIT. By using our services, you represent that you meet this age requirement and have the legal capacity to enter into binding contracts.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Account Registration</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to accept responsibility for all activities that occur under your account.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Trading Risks</h2>
              <p>Cryptocurrency trading carries substantial risk. Leverage trading amplifies both potential gains and losses. You should only trade with funds you can afford to lose.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">5. Fees</h2>
              <p>FYBIT charges fees for trading, deposits, and withdrawals as outlined on our Fees page. We reserve the right to modify our fee structure with advance notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">6. Prohibited Activities</h2>
              <p>You agree not to engage in market manipulation, fraud, money laundering, or any other illegal activities on our platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">7. Termination</h2>
              <p>We reserve the right to suspend or terminate your account at any time for violation of these terms or suspicious activity.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">8. Contact</h2>
              <p>For questions about these terms, please contact us at legal@fybit.com</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
