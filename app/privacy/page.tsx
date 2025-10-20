import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: October 18, 2025</p>

        <Card className="prose dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly, including email, name, and identification documents for KYC purposes. We also collect usage data and device information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">2. How We Use Your Information</h2>
              <p>We use your information to provide and improve our services, verify your identity, prevent fraud, and communicate with you about your account.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Data Sharing</h2>
              <p>We do not sell your personal information. We may share data with service providers who assist us in operating our platform, and when required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">5. Cookies</h2>
              <p>We use cookies and similar technologies to enhance your experience, analyze usage, and remember your preferences.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">7. Changes to This Policy</h2>
              <p>We may update this policy from time to time. We will notify you of significant changes via email or platform notification.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">8. Contact Us</h2>
              <p>For privacy concerns, contact us at privacy@fybit.com</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
